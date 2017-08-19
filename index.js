#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

// const files = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Jimmy a la Vanguardia', { horizontalLayout: 'full' })
  )
);

function getGithubCredentials(callback) {
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

  inquirer.prompt(questions).then(callback);
}

const JFile = require('jfile');

const words = new JFile('./palabras.txt');

const WordChain = require('./src/WordChain');

const prueba = new WordChain();

console.log(prueba.search('luna', 'misa', [], words.lines));

// const WordChain = require('./src/WordChain2');

// const prueba = new WordChain();

// console.log(prueba.findPath('pepino', 'luna', words.lines));
