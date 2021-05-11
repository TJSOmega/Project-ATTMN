# ATOMIC

This project addresses the problem of writing necessary, but repetitive, code snippets.

## Please Read Instructions to properly set-up

## Features

- Creates a voice command VS Code extension that eliminates repetive typing and generates designated code snippets based on voiced key words.
- VS Code has many features, and this project is a step in the direction to make the editor accessible to more people.
- To create a more productive work environment for programmers. This extension will increase productivity by decreasing typing time.

## Requirements

A built-in default microphone device is required to run this extension.

### Install SoX (Important!)

In order for the extension to work you need to install SoX which is a voice recorer used in the npm package `node-record-lpcm-16`

SoX HomePage: [https://www.npmjs.com/package/node-record-lpcm16](https://www.npmjs.com/package/node-record-lpcm16)

**For Mac OS**

`brew install sox`

**For most Linux disto's**

`sudo apt-get install sox libsox-fmt-all`

**For Windows**

**Working version for Windows is 14.4.1** . You can download the [binaries](https://sourceforge.net/projects/sox/files/sox/14.4.1/) or use [chocolately](https://chocolatey.org/) to install the package

`choco install sox.portable`

### node-record-lpcm-16

- Records a 16-bit signed-integer linear pulse modulation code WAV audio file.

- This module uses Node.js streams to minimize memory usage and optimize speed, perfect for embedded devices and "the internet of things".

- These audio files are fully compatible with both the Google Speech to Text API (v2)

- GitHub link: [https://github.com/gillesdemey/node-record-lpcm16](https://github.com/gillesdemey/node-record-lpcm16)

- NPM package link: [https://www.npmjs.com/package/node-record-lpcm16](https://www.npmjs.com/package/node-record-lpcm16)

### @google-cloud/speech

- Create google cloud account to access Cloud Client Libraries

- Set up authentication by creating service account

  - [Follow These Steps to Set Up Authentication](https://cloud.google.com/docs/authentication/production)

- Create a service account key. This downloads a JSON key file to your computer

- Once you have your JSON Key File Downloaded. Make sure the you set up your system's enviromental variable
  - For Windows Users here's how you set a system enviromental variable: [Link](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/)
  - For Mac Users: [Link](https://phoenixnap.com/kb/set-environment-variable-mac)
  - Make sure your enviromental variable is `GOOGLE_APPLICATION_CREDENTIALS` = `KEYPATH`
  - Change `KEYPATH` to the path to your JSON key file

## How to use the Atomic extension

- Search for Atomic in the VSCode extension tab and then install.
- Go to VSCodes command palette and select Atomic and it will immediately start listening for a command.
- Say "Insert" and then one of the following snippets
  * for each
  * for of
  * for in
  * anonymous function
  * arrow function
  * require
  * destructure object
  * destructure array
  * expressget
  * expresspost
  * expressserver
  * function statement
  * if statement

- Say "scroll" and then
  * To the bottom
  * To the top


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

## Creating Snippets - Contribute to our Library

- 1.) Go into the snippets directory and create a file containing the function that you would like to be a snippet. The function will need to be exported.
- 2.) Within your src folder open snippet-list.js and add your snippet in order to be recognized and in order to have it called via the voice activation.
- 3.) The main-handler will break down your voice entry and pass it to the insert handler which will insert your snippet into the text editor.


