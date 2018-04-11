import React from 'react'
import PropTypes from 'prop-types'

const Pair = props => {
	return (
		<div className="pair">
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

Pair.propTypes = {
	handleChangeToken: PropTypes.func.isRequired,
	handleChangeDef: PropTypes.func.isRequired
}

export default Pair
