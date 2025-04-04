
FE AUTOMATIZATION OF DEMOBLAZE ESHOP AND BE AUTOMATIZATION 
----------------------------------------------------------


Table of Contents

- About The Project
- Built With
- Prerequisites
- Installation
- Contact
    


ABOUT THE PROJECT
-----------------
The goal of this project is to create simple frontend automated tests for eshop https://www.demoblaze.com/index.html with use of POM concept. Automated tests in this project go through basic flow such as user sign up, login, adding products in shopping cart, fill in user information form and finishing the order. Tests are designed to test only front-end.

This project also includes basic API tests for https://fakerestapi.azurewebsites.net/index.html for all given components with use of SOM stored in "src" - "som" folder

In this project POM concept represents each page of demoblaze eshop as a single class(file) with its own properties and methods. Methods of these classes are afterwards used in test files to interact with particular page of demoblaze eshop. Files with classes are stored in "src" - "pom" folder

BE and FE tests uses fixtures - feBase.ts in tests/fe/helpers folder for FE tests and beBase.ts in tests/fe/helpers folder for BE tests

Test data are stored in external files in "data" folder.
Test configurations are stored in separate files in "data" folder
Definition of data types for test data are stored in external file in "src" - "type" folder
Selectors for pages are stored in external file and every page has its own selectors stored in "data" - "selectors" folder in "feSel.ts" file

/deffer folder is used for drafts.
/script folder contains run files both for windows and mac

POM and SOM uses feUtils and beUtils in "src" - "lib" folder
Functions for generating random values or helper functions are in "src" - "utils" folder

This project ist still under development.



BUILD WITH
----------
- Node.js
- Javascript
- Typescript
- Playwright framework


PREREQUISITES 
-------------

* Node.js
* npm
* IDE


INSTALLATION
------------

1. Clone the repo - in terminal run command:

   git clone https://github.com/kvesel8/PW-akademie-final-project-kvesela

2. Open cloned repo in you IDE

3. Install NPM packages - open a new terminal and run command:
   
   npm install

4. Install web browers for playwright - in terminal run command:

    npx playwright install

5. Change git remote url to avoid accidental pushes to base project
   
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes


HOW TO RUN TEST
---------------
1. Open a new terminal in your IDE

2. For headless run of tests run command:

   npx playwright test

3. For ui run of tests run command:

   npx playwright test --headed

4. To run specific test run command:

   npx playwright test yourTest.spec.ts



CONTACT
-------

Klara Vesela - k.vesel8@seznam.cz

Project Link: https://github.com/kvesel8/PW-akademie-final-project-kvesela