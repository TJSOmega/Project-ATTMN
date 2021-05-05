# ATTMN README


This is the README for your extension "ATTMN". 
-  This project addresses the problem of writing necessary, but repetitive, code snippets.
## Features
- Create a voice command VS Code extension that eliminates repetive typing and generates designated code snippets based on voiced key words.
- VS Code has many features, and this project is a step in the direction to make the editor accessible to more people.
- To create a more productive work environment for programmers. This extension will increase productivity by decreasing typing time.

## Requirements
  ### node-record-lpcm-16

-  Records a 16-bit signed-integer linear pulse modulation code WAV audio file.

- This module uses Node.js streams to minimize memory usage and optimize speed, perfect for embedded devices and "the internet of things".

- These audio files are fully compatible with both the Google Speech to Text API (v2) 

### Installation

- npm install node-record-lpcm16

### Dependencies

- This module requires you to install SoX and it must be available in your $PATH.

    - For Mac OS
      brew install sox

   - For most linux disto's
     sudo apt-get install sox libsox-fmt-all

### Debugging
- Debug logging is implemented with visionmedia/debug

- DEBUG=record node examples/file.js


### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
