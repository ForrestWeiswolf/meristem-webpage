import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Nonterminal from './Nonterminal'

describe('Nonterminal', () => {
	let nonterminal, changeSpy

	beforeEach(() => {
		changeSpy = spy()
		nonterminal = shallow(
			<Nonterminal handleChange={changeSpy} />
		)
	})

	it('has class "nonterminal"', () => {
		expect(nonterminal.hasClass('nonterminal')).to.be.true
	})

	xit('takes a handleChange function as a prop', () => {
	})

	it('contains a text field named "token"', () => {
		expect(nonterminal.find('input[type="text"][name="token"]')).to.have.length(1)
	})

	it('contains a text field named "definition"', () => {
		expect(nonterminal.find('input[type="text"][name="definition"]')).to.have.length(1)
	})

	it('calls its handleChange when "token" is changed', () => {
		expect(changeSpy.called).to.be.false

		nonterminal.find('input[name="token"]').first()
			.simulate('change', { target: { name: 'definition', value: 'color' } })

		expect(changeSpy.called).to.be.true
	})

	it('calls its handleChange when "definition" is changed', () => {
		expect(changeSpy.called).to.be.false

		nonterminal.find('input[name="definition"]').first()
			.simulate('change', { target: { name: 'definition', value: 'black' } })

		expect(changeSpy.called).to.be.true
	})

	it('calls handleChange with an array containing the values of token and definition', () => {
		nonterminal.find('input[name="token"]').first()
		.simulate('change', { target: { name: 'definition', value: 'color' } })

		nonterminal.find('input[name="definition"]').first()
			.simulate('change', { target: { name: 'definition', value: 'black' } })

		expect(changeSpy.calledWith(['color', 'black'])).to.be.true
	})

})