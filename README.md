# WISDOM THREADS

## Contributors
- [@moshire](https://github.com/moshire)
- [@emcrawford1](https://github.com/emcrawford1)
- [@kd101jp14](https://github.com/kd101jp14)

## Technology
* Node
* Express
* MySQL
* Sequelize
* JavaScript
* Handlebars
* Passport.js
* bCrypt
* Bootstrap
* CSS
* HTML
  
## About
The purpose of this web application is to provide users of all ages and walks of life a platform for sharing wisdom, useful tips, and experiences. By using this app, users may learn from each other in an age where passing down wisdom has been exceeded by the consumption of fast-paced entertainment. The main components of this application include 1) a SQL database that holds various tables of data, along with 2) the use of ajax requests, which allow the user to post and view the relevant data via the nice user interface of the website.

## Challenges
The primary technical challenge that the team faced while working on this application was understanding how to utilize the Sequelize library in order to create table associations for the purpose of connecting users to the data that belongs to them. This challenge is being overcome by working to understand the Sequelize documentation, pulling the help of instructors, and making various attempts to solve this issue.

Non-technical challenges have included restructuring of the team, machine failure, and life events. The team managed to overcome these challenges by spending long hours and agreeing to take on various necessary tasks to eventually create a minimum viable product (MVP)! In the future, the team would like to implement commenting, rating, categorization, and sorting of various posts.

## Instructions for Using this Application on Your Device
1. Clone this repository to a location of your choice on your local machine.
2. Download MySQL, Node, an IDE (such as Visual Code Studio), and a CLI (such as GitBash or Terminal) or ensure that these programs are on your machine and working properly.
3. Open this repository in your IDE.
4. Go to this repository in your CLI, using the command `cd [the path to this repo on your local machine]`.
5. Using NPM in your CLI to, enter the command `npm i` to download the `node-modules` folder, which will include all dependencies for this application. *This step is important!*
6. Create a MySQL Database called `sequelize_passport` so that the app data may sync with the database. You may do this by entering the following commands in MySQL:
`DROP DATABASE IF EXISTS sequelize_passport;`
`CREATE DATABASE sequelize_passport;`
Run these commands.
7. Update the `password` value with your MySQL password in the folder located at path config/config.json.
8. Run `node server.js` from your command line interface.
9. Visit http://localhost:3000.
10. Enjoy!

## How It Works
* First, signin/signup.
* Next, decide whether you would like to add a piece of wisdom or view wisdom from other users.
* Last, comment and rate user posts.

## Gif
![Wisom Threads App Gif](/public/images/gif.gif)


## Live Demo
[Click here to experience the Wisom Threads App!](https://storythread.herokuapp.com/)


## Contributing Guidelines
All contributions and suggestions are welcome! For direct contributions, please fork the repository and file a pull request.

## Contact
* shire625@gmail.com
* emcrawford1@gmail.com
* davis.kyra@rocketmail.com
