import React, { Component } from 'react'
import './App.css'
import { FormatForm, Results } from './components'

class App extends Component {
	constructor() {
		super()
		this.state = {
			formatString: '',
			definitions: {}
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Meristem</h1>
				</header>
				<FormatForm
					handleSubmit={(str, defs) => this.setState({ formatString: str, definitions: defs })}
				/>
				<Results formatString={this.state.formatString} definitions={this.state.definitions} />
			</div>
		)
	}
}

export default App
