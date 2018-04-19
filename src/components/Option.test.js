import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import Option from './Option'

describe('Option', () => {
	let option
	let changeSpy

	beforeEach(() => {
		changeSpy = spy()
		option = shallow(< Option handleChange={changeSpy} />)
	})

	it('contains a text field named "option"', () => {
		expect(option.find('input[type="text"][name="option"]')).to.have.length(1)
	})

	it('calls its handleChange when "option" is changed', () => {
		expect(changeSpy.called).to.be.false

		option.find('input[name="option"]').first()
			.simulate('change', { target: { name: 'option', value: 'foo' } })

		expect(changeSpy.called).to.be.true
	})

	it('contains a number field named "weight"', () => {
		expect(option.find('input[type="number"][name="weight"]')).to.have.length(1)
	})

	it('calls its handleChange when "weight" is changed', () => {
		expect(changeSpy.called).to.be.false

		option.find('input[name="weight"]').first()
			.simulate('change', { target: { name: 'weight', value: 12 } })

		expect(changeSpy.called).to.be.true
	})

	it('calls its handleChange with [option, weight]', () => {
		expect(changeSpy.called).to.be.false

		option.find('input[name="option"]').first()
			.simulate('change', { target: { name: 'option', value: 'foo' } })

		option.find('input[name="weight"]').first()
			.simulate('change', { target: { name: 'weight', value: 12 } })

		expect(changeSpy.calledWith(['foo', 12])).to.be.true
	})
})
