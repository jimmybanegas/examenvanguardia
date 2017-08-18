#!/usr/bin/env node


const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

const files = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}

// function getGithubCredentials(callback) {
const questions = [
  {
    name: 'username',
    type: 'input',
    message: 'Enter your Github username or e-mail address:',
    validate(value) {
      if (value.length) {
        return true;
      }
      return 'Please enter your username or e-mail address';
    }
  },
  {
    name: 'password',
    type: 'password',
    message: 'Enter your password:',
    validate(value) {
      if (value.length) {
        return true;
      }
      return 'Please enter your password';
    }
  }
];

inquirer.prompt(questions);
// }
