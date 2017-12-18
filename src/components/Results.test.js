import React from 'react'
import Results from './Results'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Format } from 'meristem'

describe('Results', () => {
	let results
	const str = '"(this)" is a sentence without a subject.'
	const defs = { 'this': 'is a sentence without a subject.' }

	beforeEach(() => {
		results = shallow(<Results
			formatString={str}
			definitions={defs}
		/>)
	})

	it('renders a div with class "results"', () => {
		expect(results.hasClass('results')).to.be.true
	})

	xit('has a \'formatString\'  prop, which is a string', () => {
		expect(results.prop('text')).to.exist
	})

	xit('has a \'definitions\' prop, which is an object', () => {
		expect(results.prop('text')).to.exist
	})

	it('renders a div with class "results"', () => {
		expect(results.hasClass('results')).to.be.true
	})

	it('doesn\'t contain text if it was not passed props', () => {
		const emptyResults = shallow(<Results />)
		expect(emptyResults.find('p').text()).to.equal('')
	})

	it('If it is passed props, renders the result of expanding a Meristem format with the formatString and definitions from its props', () => {
		const format = new Format(str, defs)
		expect(results.find('p').text()).to.equal(format.expand())
	})

	xit('If format.expand throws an error, displays it with class "error"', () => {

	})

	xit('rerenders when new props are recieved', () => {

	})
})