import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';

// (You will find all the components in the 'components' Folder)
// Folder Structure
// -src
// 	 -Components
// 		-Navbar
// 		-Jumbotron
// 		-Cards__Container
// 		-Page

// Naming Convention Used - BEM

//All Components are Hooks Based//

function App() {
	return (
		<div>
			<Page />
		</div>
	);
}

export default App;
