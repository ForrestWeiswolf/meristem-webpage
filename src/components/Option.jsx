import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Option extends Component {
	constructor(props) {
		super(props)

		this.state = { option: '', weight: 0 }

		this.handleChange = this.props.handleChange.bind(this)
	}

	render() {
		return (
			<div>
				<input type='text' name='option'
					onChange={(e) => {
						this.setState({ option: e.target.value }, () => {
							this.handleChange([this.state.option, this.state.weight])
						})
					}}
				/>
				<input type='number' name='weight'
					onChange={(e) => {
						this.setState({ weight: e.target.value }, () => {
							this.handleChange([this.state.option, this.state.weight])
						})
					}}
				/>
			</div>
		)
	}
}

Option.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default Option
