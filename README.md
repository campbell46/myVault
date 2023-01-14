![image](https://github.com/alricf/node-skeleton/blob/master/public/images/logo.png)

## Introduction

In the modern workplace, we have so many online accounts that are used every day. It may be tempting to re-use the same password for mutliple accounts, but doing so can leave us vulnerable to hackers. 

Data breaches are expensive and time-consuming! Protect your business with MyVault Password Manager. MyVault organizes all your business' passwords and keeps your sensitive info safe. 

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by our group as part of our learnings at Lighthouse Labs.
## Features

1. Everyone in your organization can create and store all their passwords in one place.
2. Your organization's passwords have four categories: Work, Social Media, Entertainment and Finances. Click on the sidebar to view all of the passwords in each category. 
3. Logging in to any account is easy! Simply click the "Copy & Go" button and you'll be redirected to the website's login page. Your password is automatically copied to the clipboard, so all you have to do is paste it in.
4. Having trouble coming up with a strong password? No problem! MyVault can generate passwords based on the criteria specified (password length, contains lowercase, contains numbers, etc). 
5. Use the search bar at the top of the page to search all of your passwords quickly and easily.
6. You can also edit and delete your passwords in MyVault. Simply click the "More" button next to the password you want to change.

## Final Product

**_Home Page_:** 
![Screenshot of home page](https://github.com/alricf/node-skeleton/blob/master/project_docs/screenshots/home-page-screenshot.png)

**_More Password Info_:**
![Screenshot of more password info](https://github.com/alricf/node-skeleton/blob/master/project_docs/screenshots/more-screenshot.png)

**_Add New Password_:**
![Screenshot of new password box](https://github.com/alricf/node-skeleton/blob/master/project_docs/screenshots/add-new-screenshot.png)

**_Search Results_:**
![Screenshot of search result](https://github.com/alricf/node-skeleton/blob/master/project_docs/screenshots/search-screenshot.png)
## Tech Stack 
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Getting Started

1. Clone your repository onto your local device.
2. Create the ```.env``` by using ```.env.example``` as a reference: ```cp .env.example .env```
3. Update the .env file with your correct local information
  - username: ```"username"```
  - password: ```"password"```
4. Install dependencies using the `npm i` command.
5. Create database and tables using node-postgres:
  - Create and connect to database
  ```
  CREATE DATABASE myvault;
  \c myvault
  ```
6. Reset database: `npm run db:reset`
7. Start the web server using the `npm run local` command.
8. Visit <http://localhost:8080/> in your browser.


## Dependencies
- Express
- NPM 5.x or above
- Node 10.x or above
- Sass
- Bootstrap
- PG 6.x
- ejs
- dotenv
- Morgan
- Chalk
- Nodemon


## Warnings & Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

- Do not edit the `CSS` files directly, they are auto-generated by the `SCSS` files.

## Contributors

<a href="https://github.com/alricf">
  <img src="https://github.com/alricf.png?size=10">
</a>

<!-- [[!](https://github.com/alricf.png?size=10)](https://github.com/alricf) -->
