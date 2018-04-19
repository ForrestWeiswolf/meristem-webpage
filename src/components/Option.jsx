import React from 'react'

import PropTypes from 'prop-types'

const Option = props => {
	return (
		<div>
			<input type='text' name='option'/>
			<input type='number' name='weight'/>
		</div>
	)
}

Option.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default Option
