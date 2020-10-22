//inquirer prompts user with questions
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//jest runs tests
const jest = require("jest");
 //helper functions
const promptUser = require("./helpers/inquirer.js")
const generateHTML = require("./helpers/generateHTML")
const generateCSS = require("./helpers/generateCSS")
//writeFile will create html page
const writeFileAsync = util.promisify(fs.writeFile);


async function init() {
  try {
      const answers = await promptUser();

      const html = generateHTML(answers);
      const css = generateCSS();
    //writeFile will creat html page with the answers
      await writeFileAsync("index.html", html);
      await writeFileAsync("style.css", css);

      console.log("Successfully wrote to index.html");
      console.log("Successfully wrote style.css")
  } catch (err) {
      console.log(err);
  }
}

init();
