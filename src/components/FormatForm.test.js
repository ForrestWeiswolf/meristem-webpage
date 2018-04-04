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

	it('contains a ListForm component', () => {
		expect(formatForm.find('ListForm')).to.have.length(1)
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

		describe('first arg', () => {
			it('is the contents of the formatString field', () => {
				const formatString = 'A (nonterminal) part of the string'
				const formatStringEvt = { target: { name: 'formatString', value: formatString } }

				formatForm.find('input[name="formatString"]').first()
					.simulate('change', formatStringEvt)

				//should change this to not assume that the first button is the right one:
				formatForm.find('button').first().simulate('click')

				expect(submitSpy.getCall(0).args[0]).to.equal(formatString)
			})
		})

		describe('second arg', () => {
			it('is the value passed to the the ListForm component\'s handleChange prop', () => {
				const fakeDefs = [['a', 'A'], ['b', 'B']]
				const listForm = formatForm.find('ListForm')

				listForm.props().handleChange(fakeDefs)

				formatForm.find('button').first().simulate('click')

				expect(submitSpy.getCall(0).args[1]).to.deep.equal(fakeDefs)
			})

			it('is the last value returned if the handleChange has been called multiple times', () => {
				const firstFakeDefs = [['a', 'A']]
				const lastFakeDefs = [['a', 'A'], ['b', 'B']]
				const listForm = formatForm.find('ListForm')

				listForm.props().handleChange(firstFakeDefs)
				listForm.props().handleChange(lastFakeDefs)

				formatForm.find('button').first().simulate('click')

				expect(submitSpy.getCall(0).args[1]).to.deep.equal(lastFakeDefs)
			})
		})
	})
})