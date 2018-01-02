import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import Definitions from './Definitions'

describe('Definitions', () => {
	let definitions
	let changeSpy

	beforeEach(() => {
		changeSpy = spy()
		definitions = shallow(< Definitions handleChange={changeSpy} />)
	})


	xit('has a handleChange function as a prop', () => {
	})

	it('doesn\'t render any Nonterminals to start with', () => {
		expect(definitions.find('Nonterminal')).to.have.length(0)
	})

	it('Has an "New nonterminal" button', () => {
		expect(definitions.find('button.newNonterminal')).to.have.length(1)
	})

	it('Renders N Nonterminals if the button has been clicked N times', () => {
		for (let i = 1; i <= 5; i++) {
			definitions.find('button.newNonterminal').first()
				.simulate('click')

			expect(definitions.find('Nonterminal')).to.have.length(i)
		}
	})

	it('calls handleChange when one of its nonterminals is changed', () => {
		//might want to change this test to be independant of Nonterminal implementation...
		definitions = mount(< Definitions handleChange={changeSpy} />)

		const formatString = 'A (nonterminal) part of the string'
		const formatStringEvt = { target: { name: 'formatString', value: formatString } }

		definitions.find('button.newNonterminal').first()
			.simulate('click')

		expect(changeSpy.called).to.be.false

		definitions.find('Nonterminal')
			.first()
			.find('input[type="text"]')
			.first()
			.simulate('change', formatStringEvt)

		expect(changeSpy.called).to.be.true
	})
})
