// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const recorder = require("node-record-lpcm16");
const speech = require("@google-cloud/speech");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ATTMN" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "ATTMN.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from ATTMN!");
      //--------------------------------------------------------------------------------------------------------------------------
      const config = {
        projectId: "coral-atom-312202",
        keyFilename:
          "C:\\Users\\markg\\Desktop\\GoogleKeys\\coral-atom-312202-7140d85b5afb.json",
      };
      const client = new speech.SpeechClient(config);

      const encoding = "LINEAR16";
      const sampleRateHertz = 16000;
      const languageCode = "en-US";

      const request = {
        config: {
          encoding: encoding,
          sampleRateHertz: sampleRateHertz,
          languageCode: languageCode,
        },
        interimResults: false, // If you want interim results, set this to true
      };

      //function that takes in the trancsript

      async function voiceCommand(value) {
        console.log(value);
        if (value === "scroll down") {
          vscode.commands.executeCommand("editorScroll", {
            to: "down",
            by: "line",
            value: 50,
            revealCursor: true,
          });
          console.log("After editorScroll");
        }
        if (value === "move tab") {
          await vscode.commands.executeCommand("moveActiveEditor", {
            by: "tab",
          });
        }
        if (value === "insert function") {
          const editor = vscode.window.activeTextEditor;
          editor.insertSnippet(
            new vscode.SnippetString("console.log('$1')", "$2")
            // new vscode.Position(123, 0)
          );
        }
      }

      // Create a recognize stream
      const recognizeStream = client
        .streamingRecognize(request)
        .on("error", console.error)
        .on("data", (data) =>
          process.stdout.write(
            data.results[0] && data.results[0].alternatives[0]
              ? voiceCommand(data.results[0].alternatives[0].transcript)
              : "\n\nReached transcription time limit, press Ctrl+C\n"
          )
        );

      // Start recording and send the microphone input to the Speech API.
      // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
      recorder
        .record({
          sampleRateHertz: sampleRateHertz,
          threshold: 0,
          // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
          verbose: false,
          recordProgram: "sox", // Try also "arecord" or "sox"
          silence: "10.0",
        })
        .stream()
        .on("error", console.error)
        .pipe(recognizeStream);

      console.log("Listening, press Ctrl+C to stop.");

      //--------------------------------------------------------------------------------------------------------------------------
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
