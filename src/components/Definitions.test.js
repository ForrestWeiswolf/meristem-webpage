import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import Definitions from './Definitions'

describe('Definitions', () => {
	let definitions
	let changeSpy

	beforeEach(() => {
		changeSpy = spy()
		definitions = shallow(< Definitions handleChange={changeSpy} />)
	})

	xit('has a handleChange function as a prop', () => {
	})

	it('doesn\'t render any Pairs to start with', () => {
		expect(definitions.find('Pair')).to.have.length(0)
	})

	it('Has an "New nonterminal" button', () => {
		expect(definitions.find('button.newNonterminal')).to.have.length(1)
	})

	it('Renders N Pairs if the button has been clicked N times', () => {
		for (let i = 1; i <= 5; i++) {
			definitions.find('button.newNonterminal').first()
				.simulate('click')

			expect(definitions.find('Pair')).to.have.length(i)
		}
	})

	describe('change handling', () => {
		//might want to these to be more independant of Pair implementation...
		let nonterminal

		beforeEach(() => {
			definitions.find('button.newNonterminal').first()
				.simulate('click')

			nonterminal = definitions.find('Pair').first()
		})

		it('passes a handleChangeToken function as a prop to each Pair', () => {
			expect(nonterminal.props().handleChangeToken).to.be.a('function')
		})

		it('passes a handleChangeDef function as a prop to each Pair', () => {
			expect(nonterminal.props().handleChangeDef).to.be.a('function')
		})

		it('calls handleChange when one of its Pairs handleChangeToken method is called', () => {
			expect(changeSpy.called).to.be.false

			const nontEvt = { target: { name: 'nonterminal', value: 'foo' } }

			nonterminal.props().handleChangeToken(nontEvt)

			expect(changeSpy.called).to.be.true
		})

		it('calls handleChange when one of its pairs\' handleChangeDef method is called', () => {
			expect(changeSpy.called).to.be.false

			const defEvt = { target: { name: 'definition', value: 'bar' } }

			nonterminal.props().handleChangeDef(defEvt)

			expect(changeSpy.called).to.be.true
		})

		it('calls handleChange with an array of arrays of its Pairs\' values', () => {
			/* Note that we're using a 2d array here, 
			even though the whole thing will be turned into an object elsewhere, 
			because the user may change a nonterminal but want to keep it's defintion; 
			changing a key on an Object while preserving the value is rather awkward. */

			definitions = shallow(< Definitions handleChange={changeSpy} />) 

			const inputs = [
				['a', 'A'],
				['b', 'B'],
				['c', 'C']
			]

			for (let i = 0; i < 3; i++) {
				definitions.find('button.newNonterminal').first()
					.simulate('click')

				nonterminal = definitions.find('Nonterminal').last()

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
