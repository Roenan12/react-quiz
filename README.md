# React Quiz App

Welcome to the **React Quiz App**! This application is a fun and interactive quiz platform built using **React** with a focus on state management via the `useReducer` hook. The app features a pointing system, a high score tracker, and a timer that automatically stops the quiz when the time runs out. Additionally, the app utilizes a fake API with `json-server` for handling quiz data.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up Fake API with json-server](#setting-up-fake-api-with-json-server)
- [Usage](#usage)

## Features

- **useReducer Hook**: Utilizes the `useReducer` hook for managing the quiz state effectively.
- **Pointing System**: Earn points for each correct answer and see your total score at the end.
- **High Score Feature**: Tracks and displays the highest score achieved.
- **Timer Functionality**: A countdown timer that stops the quiz automatically when it reaches zero.
- **Fake API with `json-server`**: Uses a fake API to simulate fetching quiz questions.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).
- **npm**: Node Package Manager comes with Node.js; make sure you have it installed.
- **json-server**: A fake REST API server to mock backend responses.

### Installation

1. **Clone the Repository**

   Open your terminal or command prompt and run the following command to clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-quiz.git
2. **Navigate to the Project Directory**

   Change into the project directory:
    ```bash
   cd react-quiz
    
3. **Install Dependencies**
   
   Install the necessary dependencies using npm:
   ```bash
   npm install
   
### Setting Up Fake API with json-server

1. **Install json-server as a Development Dependency**
   
   Install json-server locally as a development dependency:
   ```bash
   npm install json-server --save-dev
2. **Start the json-server**

   Run the following command to start `json-server`:
   ```bash
   npm run server
  The server will be accessible at http://localhost:8000.
   
### Usage
* Run the following command to start the development server:
  ```bash
  npm start
 **Open your browser** and navigate to http://localhost:3000.
