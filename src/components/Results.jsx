import React from 'react'
import PropTypes from 'prop-types'
import { Format } from 'meristem'

const Results = (props) => {
	let text = ''

	if (props.formatString && props.definitions) {
		let defs = {}
		props.definitions.forEach((pair) => {
			defs[pair[0]] = pair[1]
		})
		
		const format = new Format(props.formatString, defs)

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
