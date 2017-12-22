import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Nonterminal from './Nonterminal'

describe('Nonterminal', () => {
	let nonterminal, changeTokenSpy, changeDefSpy

	beforeEach(() => {
		changeTokenSpy = spy()
		changeDefSpy = spy()
		nonterminal = shallow(
			<Nonterminal handleChangeToken={changeTokenSpy} handleChangeDef={changeDefSpy} />
		)
	})

	it('has class "nonterminal"', () => {
		expect(nonterminal.hasClass('nonterminal')).to.be.true
	})

	xit('takes a handleChangeToken function as a prop', () => {
	})

	xit('takes a handleChangeDef function as a prop', () => {
	})

	it('contains a form', () => {
		expect(nonterminal.find('form')).to.have.length(1)
	})

	it('contains a text field named "token"', () => {
		expect(nonterminal.find('input[type="text"][name="token"]')).to.have.length(1)
	})

	it('contains a text field named "definition"', () => {
		expect(nonterminal.find('input[type="text"][name="definition"]')).to.have.length(1)
	})

	it('calls its handleChangeToken when "token" is changed', () => {
		expect(changeTokenSpy.called).to.be.false

		nonterminal.find('input[name="token"]').first()
			.simulate('change', { target: { name: 'definition', value: 'color' } })

		expect(changeTokenSpy.called).to.be.true
	})

	it('calls its handleChangeDef when "definition" is changed', () => {
		expect(changeDefSpy.called).to.be.false

		nonterminal.find('input[name="definition"]').first()
			.simulate('change', { target: { name: 'definition', value: 'black' } })

		expect(changeDefSpy.called).to.be.true
	})
})