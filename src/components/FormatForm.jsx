import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Definitions from './Definitions'

class FormatForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formatString: '',
			definitions: ''
		}
		this.handleSubmit = this.props.handleSubmit.bind(this)
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
							onChange={(e) => { this.setState({ formatString: e.target.value }) }}
						/>
					</label>
					<br />
					<label> Definitions:
						<Definitions handleChange={(defs) => { this.setState({ definitions: defs }) }} />
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

FormatForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default FormatForm
