import React from 'react'
import FormatForm from './FormatForm'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { format } from 'url';

describe('FormatForm', () => {
	let formatForm
	let submitSpy

	beforeEach(() => {
		submitSpy = spy()

		formatForm = shallow(<FormatForm handleSubmit={submitSpy} />)
	})

	it('renders a div with class "formatForm"', () => {
		expect(formatForm.hasClass('formatForm')).to.be.true
	})

	it('contains a form', () => {
		expect(formatForm.find('form')).to.have.length(1)
	})

	it('contains a field for a string', () => {
		expect(formatForm.find('input[type="text"]')).to.have.length(1)
	})

	// it('has a handleSubmit function as a prop', () => {
	// 	expect(formatForm.props().handleSubmit).to.be.a('function')
	// })

	it('has a \'generate\' button', () => {
		expect(formatForm.find('button').text()).to.match(/generate/i)
	})

	it('calls handleSubmit when the submit button is clicked', () => {
		formatForm.find('button').first().simulate('click')
		
		expect(submitSpy.called).to.be.true
	})

	it('calls handleSubmit with whatever was typed in the text field', () => {
		const input = '(nonterminal)'
		const event = {target: {name: 'formatString', value: input}}
		formatForm.find('input').first().simulate('change', event)
		formatForm.find('button').first().simulate('click')
		
		expect(submitSpy.calledWith(input)).to.be.true
	})

})