import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Nonterminal extends Component {
	constructor(props) {
		super(props)

		this.state = { token: '', definition: '' }

		this.handleChange = this.props.handleChange.bind(this)
	}

	render() {
		return (
			<div className="nonterminal">
				<label> Token:
					<input
						type='text'
						name='token'
						value={this.state.token}
						onChange={(e) => {
							this.setState({ token: e.target.value }, () => {
								//passing handleChange an event object because ListForm expects one
								this.handleChange({
									target: {
										value: [this.state.token, this.state.definition]
									}
								})
							})
						}}
					/>
				</label>

				<label> Definition:
					<input
						type='text'
						name='definition'
						value={this.state.definition}
						onChange={(e) => {
							this.setState({ definition: e.target.value }, () => {
								this.handleChange({
									target: {
										value: [this.state.token, this.state.definition]
									}
								})
							})
						}}
					/>
				</label>
			</div>
		)
	}
}

Nonterminal.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default Nonterminal
