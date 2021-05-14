# Getting Started with Kawa Space Project

This project was bootstrapped with Create React App.

# Brief about Technologies
   `create-react-app`\
   `React Hooks`\
   `useState`, `useEffect`\
   `axios`


# Description

(All the Components are in the 'components' Folder)
Folder Structure\
-src\
	  &nbsp;&nbsp;&nbsp; &nbsp;-Components\
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Navbar\
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Jumbotron\
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Cards__Container\
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Page

Page is the Main Stateful Component which Renders The other 3 Dumb Functional Components

All Components are Hooks Based

Naming Convention Used - BEM

For Styling the Components - CSS 

## What this Project Does Internally

State Variables -
- Array - which Hold the informaation of the Cards
- Index of the clicked Card - Intially of the First Element


It Fetches the Data From the API\
Populates the Array with that Data\
Renders that Array using map\
Whenever User Clicks a Card, Click Handler is triggered and the Index of the Card in the State is Updated\
And Object at that Index is Passed to The Jumbotron (The Big Card)\
And the card with that index is Filtered by adding a different Css class so that it appears clicked and has a 'Purple' Backgorund

## Directions to run locally

In the *project directory*, you can run:
1. You need to have the following installed (Latest Version Preferred)
      - Node.js
      - npm 
      - create-react-app using npm  

2. Run 'npm install'
     - To Install all the dependencies 

3. Run 'npm start'
     - To Run the Project In Dev Mode  

4. Run 'ctrl + C' in the Command Line to stop the Node Deamon from serving the react app

## If Run into an Error during installation 
1. Update Node and npm to latest version
2. Try installing Cors library using npm as this Project uses External API to Fetch Data
3. Comment Down the Error, and we will try to solve it
