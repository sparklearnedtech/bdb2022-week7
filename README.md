# BDB2022 Week 7 Exercise

For week 7, you will be developing the Web3 Playground. This was one of the early demo project by the cohort 1 mentor, [@medardm](https://github.com/medardm). The project was cloned from [sparkpointio/bdb-web3-playground](https://github.com/sparkpointio/bdb-web3-playground), and is improved and maintained by [@harveyjavier](https://github.com/harveyjavier) for [SparkLearn EdTech](https://sparklearn-edtech.com/).

## Setup
1. Clone this repository by running `git clone https://github.com/sparklearnedtech/bdb2022-week7.git`.
2. Create your own branch using this format (firstname-lastname), checkout, and make sure you are not on main branch.
	```
	git branch john-doe    // create branch using firstname-lastname format
	git checkout john-doe  // checkout on newly created branch
	git branch             // check and make sure you are currently on your john-doe branch, not main
	```
3. Run `npm install` to generate your `node_modules` folder and download all necessary packages.
5. Then run `npm start` to check the web app and start coding. Mostly you will code on `src/App.js`.
4. Once you're done, just message [@harveyjavier](https://github.com/harveyjavier) on Slack, and he will check your branch.

## Instructions
1. For this exercise you will fill all the missing functions of the web app.
2. There are 9 items, initially item number 1, which is the _Web3 initialization_ is already a bonus.
3. Here are the other 8 items:
	* _Request accounts function_
	* _Show selected address function_
	* _Get eth balance function_
	* _Convert wei to ether function_
	* _Convert ether to wei function_
	* _Show Web3 utilities function_
	* _Initialize a smart contract function_
	* _Send a transaction function_

	Here's a demo GIF of the exercise output for your guide.
	![Demo](https://github.com/sparklearnedtech/bdb2022-week7/blob/main/src/images/sparklearn-web3-playground.gif)

## Rubrics
This exercise will be graded with the following criterias:
* Requirements & Delivery (5 pts.) - How you followed the instructions of the exercise and deliver its specific requirements.
* Runtime (5 pts.) - How your project will run seamlessly on the mentor's local end and environment.
* Code standard & cleanliness (5 pts.) - The tidyness of your code and its standard. Will be checked by linters.
* Creativity (5 pts.) - How presentable your project will look on runtime and how you played around with the project's components and functions.
