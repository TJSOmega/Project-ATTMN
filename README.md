# ATTMN README

This project addresses the problem of writing necessary, but repetitive, code snippets.

## Features

- Creates a voice command VS Code extension that eliminates repetive typing and generates designated code snippets based on voiced key words.
- VS Code has many features, and this project is a step in the direction to make the editor accessible to more people.
- To create a more productive work environment for programmers. This extension will increase productivity by decreasing typing time.

## Requirements

A built-in microphone device is required to run this extension.

### node-record-lpcm-16

- Records a 16-bit signed-integer linear pulse modulation code WAV audio file.

- This module uses Node.js streams to minimize memory usage and optimize speed, perfect for embedded devices and "the internet of things".

- These audio files are fully compatible with both the Google Speech to Text API (v2)

### @google-cloud/speech

- Create google cloud account to access Cloud Client Libraries

- In your terminal run:
  `npm install --save @google-cloud/speech`

- Set up authentication by creating service account

  - Select a project
  - Select the 'Owner' role field

- Create a service account key. This downloads a JSON key file to your computer

[For more information directly from Google click here](https://cloud.google.com/speech-to-text/docs/libraries#windows)

## Installation & Dependencies

- Clone this repo
- To download dependencies, run `npm install`
- In addition, this module requires you to globally install SoX and it must be available in your $PATH.

  - For Mac OS
    `brew install sox`

  - For most linux disto's
    `sudo apt-get install sox libsox-fmt-all`

- Update the file path in extension.js to reflect your Google Cloud KeyID and file path to the downloaded JSON file.

## Current Snippet Library & How to Activate Snippet

- foreach
- forof
- forin
- anonymous function
- arrow function
- require
- destructure object
- destructure array

## Creating Snippets - Contribute to our Library!

-

## Debugging

- Debug logging is implemented with visionmedia/debug

- DEBUG=record node examples/file.js

### For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
