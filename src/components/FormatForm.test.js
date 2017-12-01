import React from 'react'
import FormatForm from './FormatForm'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('FormatForm', () => {
  let formatForm

  beforeEach(() => {
    formatForm = shallow(<FormatForm />)
  })

  it('renders a div with class "formatForm"', () => {
    expect(formatForm.hasClass("formatForm"))
  })

  it('contains a form', () => {
    expect(formatForm.find('form')).to.have.length(1)
  })

  // it('contains a field for a string', () => {
  //   expect(formatForm.find('form').chiledren.
  // })

  it('has formatString on local state', () => {
    expect(formatForm.state('formatString')).to.exist()
  })

  // it('updates formatString text is entered in the form', () => {
  // })

  it('has a handleSubmit prop', () => {
    expect(formatForm.props().handleSubmit).to.exist()
  })

  // it('has a submit button', () => {
  // })

  // it('calls handleSubmit with formatString when submit button is clicked', () => {
  // })

})