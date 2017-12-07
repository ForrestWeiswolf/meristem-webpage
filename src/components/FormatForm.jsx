import React, { Component } from 'react'

class FormatForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formatString: '',
			definitions: ''
		}
		this.handleSubmit = this.props.handleSubmit.bind(this)
		this.handleChangeFormat = this.handleChangeFormat.bind(this)
		this.handleChangeDefinitions = this.handleChangeDefinitions.bind(this)
	}

	handleChangeFormat(evt) {
		this.setState({ formatString: evt.target.value })
	}

	handleChangeDefinitions(evt) {
		this.setState({ definitions: evt.target.value })
	}

	render() {
		return (
			<div className="formatForm">
				<form>
					<label> Format:
						<input
							type='text'
							name='formatString'
							value={this.state.formatString}
							onChange={this.handleChangeFormat}
						/>
					</label>
					<br />
					<label> Definitions:
						<input
							type='text'
							name='definitions'
							value={this.state.defintions}
							onChange={this.handleChangeDefinitions}
						/>
					</label>
					<button
						type="button"
						onClick={() => this.handleSubmit(this.state.formatString, this.state.definitions)}
					>Generate text</button>
				</form>
			</div>
		)
	}
}

export default FormatForm
