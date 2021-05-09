// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const recorder = require("node-record-lpcm16");
const speech = require("@google-cloud/speech");

const mainHandler = require("./src/main-handler.js");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "Atomic" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "Atomic.startRecord",
    function () {
      // The code you place here will be executed every time your command is executed
      //------------------- CONFIG FOR GOOGLE CLOUD API CREDENTIALS ---------------------------------------
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

      // Create a recognize stream
      const recognizeStream = client
        .streamingRecognize(request)
        .on("error", console.error)
        .on("data", (data) =>
          data.results[0].isFinal && data.results[0].alternatives[0]
            ? middleHandler(data.results[0].alternatives[0].transcript)
            : console.log("Sorry could not pick-up what you said.")
        );
      // Start recording and send the microphone input to the Speech API.
      // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
      const recording = recorder.record({
        sampleRateHertz: sampleRateHertz,
        threshold: 0,
        // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
        verbose: false,
        recordProgram: "rec", // Try also "arecord" or "sox"
        silence: "3.0",
        endOnSilence: true,
      });
      recording.stream().on("error", console.error).pipe(recognizeStream);

      const middleHandler = (value) => {
        mainHandler(value);
        recognizeStream.removeListener("data", middleHandler);
        recognizeStream.destroy();
        recognizeStream = null;
      };

      console.log("Listening, press Ctrl+C to stop.");
      vscode.window.showInformationMessage("Now listening...");

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
