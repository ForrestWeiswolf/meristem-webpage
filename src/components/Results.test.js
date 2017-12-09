import React from 'react'
import Results from './Results'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Meristem from 'meristem'

describe('Results', () => {
	let results
	const str = 'Words, words, words'

	beforeEach(() => {
		results = shallow(<Results 
			formatString="'(this)' is a sentence with a subject." 
			definitions={{'this': 'is a sentence with a subject.'}} 
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

	it('Renders the result of expanding a Meristem format with the formatString and definitions from its props', () => {
		const format = Meristem.format('\'(this)\' is a sentence with a subject.', {'this': 'is a sentence with a subject.'})
		expect(results.find('p').text()).to.be(format.expand())
	})

	xit('rerenders when new props are recieved', () => {

	})
})