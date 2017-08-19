#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const JFile = require('jfile');
const WordChain = require('./src/WordChain');
const WordChain2 = require('./src/WordChain2');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Jimmy a la Vanguardia', { horizontalLayout: 'full' })
  )
);


function promptUser(callback) {
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
    },
    {
      name: 'language',
      type: 'input',
      message: 'Enter en for ENGLISH or es for SPANISH:',
      validate(value) {
        if (value.length && (value.toLowerCase() === 'en' || value.toLowerCase() === 'es')) {
          return true;
        }
        return 'Please enter EN or ES';
      }
    }
  ];

  inquirer.prompt(questions).then((answers) => {
    let words = [];
    if (answers.language.toLowerCase() === 'es') {
      words = new JFile('./palabras.txt').lines;
    } else {
      words = new JFile('./words').lines;
    }

    // if (answers.source.length === answers.destination.length) {
    const prueba = new WordChain();

    console.log(prueba.search(answers.source.trim(), answers.destination.trim(), [], words));
    // // } else {
    //   const prueba2 = new WordChain2();

    //   console.log(prueba2.findPath(answers.source, answers.destination, words));
    // // }
  });
}

promptUser();

