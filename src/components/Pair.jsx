import React from 'react'
import PropTypes from 'prop-types'

const Pair = props => {
	return (
		<div className="pair">
			<label> {props.labels[0]}:
				<input
					type='text'
					name={props.labels[0]}
					onChange={props.handleChangeFirst}
				/>
			</label>

			<label> {props.labels[1]}:
				<input
					type='text'
					name={props.labels[1]}
					onChange={props.handleChangeSecond}
				/>
			</label>
		</div>
	)
}

Pair.propTypes = {
	labels: PropTypes.array.isRequired,
	handleChangeFirst: PropTypes.func.isRequired,
	handleChangeSecond: PropTypes.func.isRequired
}

export default Pair
