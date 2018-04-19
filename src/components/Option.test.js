import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import Option from './Option'

describe('Option', () => {
	let option
	changeSpy = spy()

	beforeEach(() => {
		option = shallow(< Option handleChange={changeSpy} />)
	})

	it('contains a text field named "option"', () => {
		expect(option.find('input[type="text"][name="option"]')).to.have.length(1)
	})

	it('contains a number field named "weight"', () => {
		expect(option.find('input[type="number"][name="option"]')).to.have.length(1)
	})
})
