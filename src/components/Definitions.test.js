import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import Definitions from './Definitions'
import Nonterminal from './Nonterminal';

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

	it('passes a handleChangeToken function as a prop to each Nonterminal', () => {
		definitions = shallow(< Definitions handleChange={() => {}} />)

		definitions.find('button.newNonterminal').first()
			.simulate('click')

		const nonterminal = definitions.find('Nonterminal').first()
		
		expect(nonterminal.props().handleChangeToken).to.be.a('function')
	})

	it('passes a handleChangeDef function as a prop to each Nonterminal', () => {
		definitions = shallow(< Definitions handleChange={() => {}} />)

		definitions.find('button.newNonterminal').first()
			.simulate('click')

		const nonterminal = definitions.find('Nonterminal').first()
		
		expect(nonterminal.props().handleChangeDef).to.be.a('function')
	})

	it('calls handleChange when one of its nonterminals handleChangeToken method is called', () => {
		//might want to change this test to be independant of Nonterminal implementation...
		definitions = shallow(< Definitions handleChange={changeSpy} />)

		definitions.find('button.newNonterminal').first()
			.simulate('click')

		expect(changeSpy.called).to.be.false

		const nontEvt = { target: { name: 'nonterminal', value: 'foo' } }

		definitions.find('Nonterminal')
			.first()
			.props()
			.handleChangeToken(nontEvt)

		expect(changeSpy.called).to.be.true
	})

	it('calls handleChange when one of its nonterminals handleChangeDef method is called', () => {
		//might want to change this test to be independant of Nonterminal implementation...
		definitions = shallow(< Definitions handleChange={changeSpy} />)

		definitions.find('button.newNonterminal').first()
			.simulate('click')

		expect(changeSpy.called).to.be.false

		const defEvt = { target: { name: 'definition', value: 'bar' } }

		definitions.find('Nonterminal')
			.first()
			.props()
			.handleChangeDef(defEvt)

		expect(changeSpy.called).to.be.true
	})
})
