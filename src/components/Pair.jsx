import React from 'react'
import PropTypes from 'prop-types'

const Pair = props => {
	return (
		<div className="pair">
			<label> Token:
				<input
					type='text'
					name='token'
					onChange={props.handleChangeFirst}
				/>
			</label>

			<label> Definition:
				<input
					type='text'
					name='definition'
					onChange={props.handleChangeSecond}
				/>
			</label>
		</div>
	)
}

Pair.propTypes = {
	handleChangeFirst: PropTypes.func.isRequired,
	handleChangeSecond: PropTypes.func.isRequired
}

export default Pair
