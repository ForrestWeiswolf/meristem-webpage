import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListForm from './ListForm'

class Nonterminal extends Component {
	constructor(props) {
		super(props)

		this.state = { token: '', definition: '', type: 'text' }

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

				<label> Type:
					<select
						name="type"
						onChange={(e) => this.setState({ type: e.target.value })}
						value={this.state.type}
					>
						<option value="text">Text</option>
						<option value="wRand">Random</option>
					</select>
				</label>

				{this.state.type === 'text'
					? (<label> Definition:
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
					</label>)
					:
					(<ListForm
						className="wRand"
						childForm={props => {
							return (<input type="text" onChange={props.handleChange} />)
						}}
						handleChange={(childVals) => {
							this.setState({ definition: childVals }, () => {
								this.handleChange({
									target: {
										value: [this.state.token, this.state.definition]
									}
								})
							})
						}}
					/>)}
			</div>
		)
	}
}

Nonterminal.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default Nonterminal
