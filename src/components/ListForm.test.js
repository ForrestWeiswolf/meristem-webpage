import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import ListForm from './ListForm'

describe('ListForm', () => {
	let listForm
	let changeSpy

	beforeEach(() => {
		changeSpy = spy()
		listForm = shallow(< ListForm handleChange={changeSpy} />)
	})

	xit('has a handleChange function as a prop', () => {
	})

	it('doesn\'t render any Nonterminals to start with', () => {
		expect(listForm.find('Nonterminal')).to.have.length(0)
	})

	it('Has an "New nonterminal" button', () => {
		expect(listForm.find('button.newNonterminal')).to.have.length(1)
	})

	it('Renders N Nonterminals if the button has been clicked N times', () => {
		for (let i = 1; i <= 5; i++) {
			listForm.find('button.newNonterminal').first()
				.simulate('click')

			expect(listForm.find('Nonterminal')).to.have.length(i)
		}
	})

	describe('change handling', () => {
		//might want to these to be more independant of Nonterminal implementation...
		let nonterminal

		beforeEach(() => {
			listForm.find('button.newNonterminal').first()
				.simulate('click')

			nonterminal = listForm.find('Nonterminal').first()
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
				listForm.find('button.newNonterminal').first()
					.simulate('click')

				nonterminal = listForm.find('Nonterminal').last()

				nonterminal
					.props()
					.handleChangeToken({ target: { name: 'nonterminal', value: inputs[i][0] } })

				nonterminal
					.props()
					.handleChangeDef({ target: { name: 'nonterminal', value: inputs[i][1] } })
			}

			const calls = changeSpy.getCalls()
			const lastCall = calls[calls.length - 1]
			expect(lastCall.args[0]).to.deep.equal(inputs)
		})
	})//end change handling
})
