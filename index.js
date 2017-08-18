#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

const files = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Jimmy a la Vanguardia', { horizontalLayout: 'full' })
  )
);

// function getGithubCredentials(callback) {
const questions = [
  {
    name: 'source',
    type: 'input',
    message: 'Enter the source word:',
    validate(value) {
      if (value.length) {
        return true;
      }
      return 'Please enter the source word';
    }
  },
  {
    name: 'destination',
    type: 'input',
    message: 'Enter the destination word:',
    validate(value) {
      if (value.length) {
        return true;
      }
      return 'Please enter the destination word';
    }
  }
];

inquirer.prompt(questions);
// }
