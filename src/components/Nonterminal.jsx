import React from 'react'
import PropTypes from 'prop-types'

const Nonterminal = props => {
	return (
		<div className="nonterminal">
			<form>
				<label> Token:
					<input
						type='text'
						name='token'
						onChange={props.handleChange}
					/>
				</label>

				<label> Definition:
					<input
						type='text'
						name='definition'
						onChange={props.handleChange}
					/>
				</label>
			</form>
		</div>
	)
}

Nonterminal.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default Nonterminal
