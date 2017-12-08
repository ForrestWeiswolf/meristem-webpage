import React from 'react'
import Results from './Results'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Results', () => {
	let results
	const str = 'Words, words, words'

	beforeEach(() => {
		results = shallow(<Results text={str} />)
	})

	it('renders a div with class "results"', () => {
		expect(results.hasClass('results')).to.be.true
	})

	// it('has a \'text\'  prop', () => {
	// 	expect(results.prop('text')).to.exist
	// })

	it('renders that text', () => {
		expect(results.find('p').text()).to.include(str)
	})
})