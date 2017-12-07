import React, { Component } from 'react'

class FormatForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formatString: ''
		}
		this.handleSubmit = this.props.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(evt) {
		this.setState({ formatString: evt.target.value })
	}

	render() {
		return (
			<div className="formatForm">
				<form>
					<input type='text' name='formatString' value={this.state.formatString} onChange={this.handleChange} />
					<button type="button" onClick={() => this.handleSubmit(this.state.formatString)}>Generate text</button>
				</form>
			</div>
		)
	}
}

export default FormatForm
