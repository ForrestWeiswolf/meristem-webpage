import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Definitions from './Definitions'

describe('Definitions', () => {
	let definitions

	beforeEach(() => {
		definitions = shallow(< Definitions />)
	})

	it('doesn\'t render any Nonterminals to start with', () => {
		expect(definitions.find('Nonterminal')).to.have.length(0)
	})

	it('Has an "New nonterminal" button', () => {
		expect(definitions.find('button.newNonterminal')).to.have.length(1)
	})

	xit('Renders a Nonterminal if the button has been clicked once', () => {
		expect(definitions.find('Nonterminal')).to.have.length(0)

		definitions.find('button.newNonterminal').first()
			.simulate('click')

		expect(definitions.find('Nonterminal')).to.have.length(1)
	})

	it('Renders N Nonterminals if the button has been clicked N times', () => {
		for (let i = 1; i <= 5; i++) {
			definitions.find('button.newNonterminal').first()
				.simulate('click')

			expect(definitions.find('Nonterminal')).to.have.length(i)
		}
	})

	//gets values from all nonterminals it is rendering
})
