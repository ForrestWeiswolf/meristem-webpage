import React from 'react'
import PropTypes from 'prop-types'

const Results = (props) => {
	return (
		<div className="results">
			<p>{props.text}</p>
		</div>
	)
}

Results.propTypes = {
	text: PropTypes.string.isRequired
}

export default Results
