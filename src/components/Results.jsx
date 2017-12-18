import React from 'react'
import PropTypes from 'prop-types'
import { Format } from 'meristem'

const Results = (props) => {
	const format = new Format(props.formatString, props.definitions)
	return (
		<div className="results">
			<p>{format.expand()}</p>
		</div>
	)
}

Results.propTypes = {
	formatString: PropTypes.string,
	defintions: PropTypes.object	
}

export default Results
