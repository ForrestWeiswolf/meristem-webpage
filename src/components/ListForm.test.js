import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import ListForm from './ListForm'

describe('ListForm', () => {
	let listForm
	let changeSpy
	let mockForm = props => {
		return (<input type="text" name="mockInput" onChange={props.handleChange} />)
	}

	beforeEach(() => {
		changeSpy = spy()
		listForm = shallow(< ListForm childForm={mockForm} handleChange={changeSpy} />)
	})

	xit('has a handleChange function as a prop', () => {
	})

	xit('has a childForm component as a prop', () => {
	})

	it('has class "listForm"', () => {
		expect(listForm.hasClass('listForm')).to.be.true
	})

	it('doesn\'t render any childForm components to start with', () => {
		expect(listForm.find(mockForm)).to.have.length(0)
	})

	it('Has an "New" button', () => {
		expect(listForm.find('button.newItem')).to.have.length(1)
	})

	it('Renders N childForm components if the button has been clicked N times', () => {
		listForm = mount(< ListForm childForm={mockForm} handleChange={changeSpy} />)

		for (let i = 1; i <= 5; i++) {
			listForm.find('button.newItem').first()
				.simulate('click')

			expect(listForm.find(mockForm)).to.have.length(i)
		}
	})

	describe('change handling', () => {
		let childForm

		beforeEach(() => {
			listForm = mount(< ListForm childForm={mockForm} handleChange={changeSpy} />)

			listForm.find('button.newItem').first()
				.simulate('click')

			childForm = listForm.find(mockForm).first()
		})

		it('calls handleChange when one of its childForms is changed', () => {
			expect(changeSpy.called).to.be.false

			childForm.simulate('change')

			expect(changeSpy.called).to.be.true
		})

		it('calls handleChange with an arrays of its childForms\' values', () => {
			changeSpy = spy()
			listForm = mount(< ListForm childForm={mockForm} handleChange={changeSpy} />)

			const inputs = ['a', 'b', 'c']

			inputs.forEach((input) => {
				listForm.find('button.newItem').first()
					.simulate('click')

				childForm = listForm.find(mockForm).last()

				childForm.simulate('change', { target: { name: 'mockInput', value: input } })
			})

			const calls = changeSpy.getCalls()
			const lastCall = calls[calls.length - 1]
			expect(lastCall.args[0]).to.deep.equal(inputs)
		})
	})//end change handling
})
