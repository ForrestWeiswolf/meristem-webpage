import React from 'react'
import Results from './Results'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Format } from 'meristem'

describe('Results', () => {
	let results
	const str = '"(quine)" (quine). "(otherQuine)" (otherQuine).'
	const defsAsArr = [
		['quine', 'is a sentence without a subject'],
		['otherQuine', 'yields falsehood when preceded by its quotation']
	]
	const defsAsObj = {
		'quine': 'is a sentence without a subject',
		'otherQuine': 'yields falsehood when preceded by its quotation'
	}

	beforeEach(() => {
		results = shallow(<Results
			formatString={str}
			definitions={defsAsArr}
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

	describe('if it is passed a formatString and a 2d array of definitions', () => {
		it('renders the result of expanding a Meristem format with them, after converting the array into an object', () => {
			const format = new Format(str, defsAsObj)
			expect(results.find('p').text()).to.equal(format.expand())
		})
	})

	xit('If format.expand throws an error, displays it with class "error"', () => {

	})

	xit('rerenders when new props are recieved', () => {

	})
})