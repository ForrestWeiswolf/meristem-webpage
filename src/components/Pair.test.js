import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Pair from './Pair'

describe('Pair', () => {
	let pair, changeFirstSpy, changeSecondSpy

	beforeEach(() => {
		changeFirstSpy = spy()
		changeSecondSpy = spy()
		pair = shallow(
			<Pair handleChangeFirst={changeFirstSpy} handleChangeSecond={changeSecondSpy} />
		)
	})

	it('has class "pair"', () => {
		expect(pair.hasClass('pair')).to.be.true
	})

	xit('takes a handleChangeFirst function as a prop', () => {
	})

	xit('takes a handleChangeSecond function as a prop', () => {
	})

	it('contains a text field named "first"', () => {
		expect(pair.find('input[type="text"][name="first"]')).to.have.length(1)
	})

	it('contains a text field named "second"', () => {
		expect(pair.find('input[type="text"][name="second"]')).to.have.length(1)
	})

	it('calls its handleChangeFirst when "first" is changed', () => {
		expect(changeFirstSpy.called).to.be.false

		pair.find('input[name="first"]').first()
			.simulate('change', { target: { name: 'second', value: 'color' } })

		expect(changeFirstSpy.called).to.be.true
	})

	it('calls its handleChangeSecond when "second" is changed', () => {
		expect(changeSecondSpy.called).to.be.false

		pair.find('input[name="second"]').first()
			.simulate('change', { target: { name: 'second', value: 'black' } })

		expect(changeSecondSpy.called).to.be.true
	})
})