import React from 'react'
import App from './App'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import { FormatForm, Results } from './components'

describe('App', () => {
	let app

	beforeEach(() => {
		app = mount(<App />)
	})

	it('has a header', () => {
		expect(app.find('header')).to.have.length(1)
	})

	it('renders a FormatForm', () => {
		expect(app.find('FormatForm')).to.have.length(1)
	})

	it('renders a Results component', () => {
		expect(app.find('Results')).to.have.length(1)
	})

	xit('passes the return of its FormatForm\'s handleSubmit prop to its Results', () => {

	})
})