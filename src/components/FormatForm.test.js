import React from 'react'
import FormatForm from './FormatForm'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

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

	it('contains a text field named "formatString"', () => {
		expect(formatForm.find('input[type="text"][name="formatString"]')).to.have.length(1)
	})

	it('contains a Definitions component', () => {
		expect(formatForm.find('Definitions')).to.have.length(1)
	})

	it('has a \'generate\' button', () => {
		expect(formatForm.find('button').text()).to.match(/generate/i)
	})

	// it('has a handleSubmit function as a prop', () => {
	// 	expect(formatForm.props().handleSubmit).to.be.a('function')
	// })

	describe('handleSubmit', () => {
		it('is called when the submit button is clicked', () => {
			formatForm.find('button').first().simulate('click')

			expect(submitSpy.called).to.be.true
		})

		it('first arg is the contents of the formatString field', () => {
			const formatString = 'A (nonterminal) part of the string'
			const formatStringEvt = { target: { name: 'formatString', value: formatString } }

			formatForm.find('input[name="formatString"]').first()
				.simulate('change', formatStringEvt)

			formatForm.find('button').first().simulate('click')

			expect(submitSpy.getCall(0).args[0]).to.equal(formatString)
		})

		xit('second arg is the result of the last call of the function passed to Definitions component', () => {
		})
	})
})