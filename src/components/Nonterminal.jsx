import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Nonterminal extends Component {
	constructor(props) {
		super(props)

		this.state = {token: '', definition: ''}

		this.handleChange = this.props.handleChange.bind(this)
	}

	render() {
		return (
			<div className="nonterminal">
				<label> Token:
					<input
						type='text'
						name='token'
						onChange={(e) => {
							this.setState({token: e.target.value})
							this.handleChange([this.state.token, this.state.definition])
						}}
					/>
				</label>

				<label> Definition:
					<input
						type='text'
						name='definition'
						onChange={(e) => {
							this.setState({definition: e.target.value})
							this.handleChange([this.state.token, this.state.definition])
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
