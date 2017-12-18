import React from 'react'
import PropTypes from 'prop-types'
import { Format } from 'meristem'

const Results = (props) => {
	let text = ''

	if (props.formatString && props.definitions) {
		const format = new Format(props.formatString, props.definitions)
		text = format.expand()
	}

	return (
		<div className="results">
			<p>{text}</p>
		</div>
	)
}

Results.propTypes = {
	formatString: PropTypes.string,
	defintions: PropTypes.object
}

export default Results
