# Selenium Page Object Model in Javascript with Jest

**[Demo Preview](https://youtu.be/9U4LRM7Yb1k "Demo Preview")**





Demonstrates a way of organizing Selenium Tests Using the Page Object Model for testing a simple registration page on [www.wizzair.com](https://wizzair.com/ "www.wizzair.com").
This application uses Jest as testing framework and faker-js (library for generating fake data).

> Page Object Model (POM) is a design pattern, popularly used in test automation that creates Object Repository for web UI elements. The advantage of the model is that it reduces code duplication and improves test maintenance.



## Installation

**Important**

In order to run the tests and use Selenium, you need to download  seperetable executables which controls a browser.

The drivers for Chrome, Firefox web browsers are all standalone executables that should be placed on your system [PATH](http://en.wikipedia.org/wiki/PATH_%28variable%29 "PATH")


| Browser  | Component |
| ------------- | ------------- |
| Chrome  | [	chromedriver(.exe)](http://chromedriver.storage.googleapis.com/index.html "chromedriver")  |
| Firefox  | [geckodriver(.exe)](https://github.com/mozilla/geckodriver/releases/ "geckodriver(.exe)")  |


After you done with that.

1. Clone this repo
2. Open your code editor
3. Install the dependencies and devDependencies by typing in your terminal:

```
npm install
```

## Usage 

To run the test, type:

```
npm test
```
or
```
npm test -- registration_page
```





## Dependencies
- Selenium 4.0.0-beta.2
- Jest 26.6.3
- Jest-extended 0.11.5
- faker.js 5.5.1
