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
})