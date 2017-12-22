import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nonterminal from './Nonterminal'

class Definitions extends Component {
	constructor(props) {
		super(props)

		this.state = {
			nonterminals: []
		}

		this.addNonterminal = this.addNonterminal.bind(this)
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
							handleChangeToken={() => { }}
							handleChangeDef={() => { }}
							key={idx}
						/>)
					})
				}
				<button className="newNonterminal" onClick={this.addNonterminal}>New nonterminal</button>
			</div>
		)
	}
}

Definitions.propTypes = {
}

export default Definitions
