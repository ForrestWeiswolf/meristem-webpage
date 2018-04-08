import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import ListForm from './ListForm'

describe('ListForm', () => {
	let listForm
	let changeSpy
	let mockForm = props => {
		return (<input type="text" onChange={props.handleChange} />)
	}

	beforeEach(() => {
		changeSpy = spy()
		listForm = shallow(< ListForm childForm={mockForm} handleChange={changeSpy} />)
	})

	xit('has a handleChange function as a prop', () => {
	})

	xit('has a childForm component as a prop', () => {
	})

	it('doesn\'t render any childForm components to start with', () => {
		expect(listForm.find('input')).to.have.length(0)
	})

	it('Has an "New" button', () => {
		expect(listForm.find('button.newItem')).to.have.length(1)
	})

	it('Renders N childForm components if the button has been clicked N times', () => {
		listForm = mount(< ListForm childForm={mockForm} handleChange={changeSpy} />)

		for (let i = 1; i <= 5; i++) {
			listForm.find('button.newItem').first()
				.simulate('click')

			expect(listForm.find('input')).to.have.length(i)
		}
	})

	xdescribe('change handling', () => {
		//might want to these to be more independant of Nonterminal implementation...
		let nonterminal

		beforeEach(() => {
			listForm.find('button.newItem').first()
				.simulate('click')

			nonterminal = listForm.find('input').first()
		})

		it('passes a handleChangeToken function as a prop to each Nonterminal', () => {
			expect(nonterminal.props().handleChangeToken).to.be.a('function')
		})

		it('passes a handleChangeDef function as a prop to each Nonterminal', () => {
			expect(nonterminal.props().handleChangeDef).to.be.a('function')
		})

		it('calls handleChange when one of its nonterminals handleChangeToken method is called', () => {
			expect(changeSpy.called).to.be.false

			const nontEvt = { target: { name: 'nonterminal', value: 'foo' } }

			nonterminal.props().handleChangeToken(nontEvt)

			expect(changeSpy.called).to.be.true
		})

		it('calls handleChange when one of its nonterminals handleChangeDef method is called', () => {
			expect(changeSpy.called).to.be.false

			const defEvt = { target: { name: 'definition', value: 'bar' } }

			nonterminal.props().handleChangeDef(defEvt)

			expect(changeSpy.called).to.be.true
		})

		it('calls handleChange with an array of arrays of its Nonterminals\' values', () => {
			/* Note that we're using a 2d array here, 
			even though the whole thing will be turned into an object elsewhere, 
			because the user may change a nonterminal but want to keep it's defintion; 
			changing a key on an Object while preserving the value is rather awkward. */

			listForm = shallow(< ListForm handleChange={changeSpy} />)

			const inputs = [
				['a', 'A'],
				['b', 'B'],
				['c', 'C']
			]

			for (let i = 0; i < 3; i++) {
				listForm.find('button.newItem').first()
					.simulate('click')

				input = listForm.find('input').last()

				input
					.props()
					.handleChangeToken({ target: { name: 'nonterminal', value: inputs[i][0] } })

				input
					.props()
					.handleChangeDef({ target: { name: 'nonterminal', value: inputs[i][1] } })
			}

			const calls = changeSpy.getCalls()
			const lastCall = calls[calls.length - 1]
			expect(lastCall.args[0]).to.deep.equal(inputs)
		})
	})//end change handling
})