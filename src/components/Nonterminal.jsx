import React from 'react'
import PropTypes from 'prop-types'

const Nonterminal = props => {
	return (
		<div className="nonterminal">
			<label> Token:
				<input
					type='text'
					name='token'
					onChange={props.handleChangeToken}
				/>
			</label>

			<label> Definition:
				<input
					type='text'
					name='definition'
					onChange={props.handleChangeDef}
				/>
			</label>
		</div>
	)
}

Nonterminal.propTypes = {
	handleChangeToken: PropTypes.func.isRequired,
	handleChangeDef: PropTypes.func.isRequired
}

export default Nonterminal
