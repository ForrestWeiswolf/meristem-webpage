import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nonterminal from './Nonterminal'

class ListForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			nonterminals: []
		}

		this.addNonterminal = this.addNonterminal.bind(this)
		this.handleChange = props.handleChange.bind(this)
	}

	addNonterminal(e) {
		if (e) {
			e.preventDefault()
		}

		this.setState({ nonterminals: [...this.state.nonterminals, []] })
	}

	render() {
		return (
			<div>
				{
					this.state.nonterminals.map((nonterminal, idx) => {
						return (<Nonterminal
							handleChangeToken={(e) => {
								nonterminal[0] = e.target.value
								this.setState({nonterminals: this.state.nonterminals})
								this.handleChange(this.state.nonterminals)
							}}
							handleChangeDef={(e) => {
								nonterminal[1] = e.target.value
								this.setState({nonterminals: this.state.nonterminals})
								this.handleChange(this.state.nonterminals)
							}}
							key={idx}
						/>)
					})
				}
				<button className="newNonterminal" onClick={this.addNonterminal}>New nonterminal</button>
			</div>
		)
	}
}

ListForm.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default ListForm
