import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { FormatForm } from './components'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Meristem</h1>
				</header>
				<FormatForm handleSubmit={(str, defs) => console.log(str, defs)} />
			</div>
		)
	}
}

export default App;
