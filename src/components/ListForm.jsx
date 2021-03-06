import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListForm.css'

class ListForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: []
		}

		this.ChildForm = props.childForm
		this.newItem = this.newItem.bind(this)
		this.handleChange = props.handleChange.bind(this)
	}

	newItem(e) {
		if (e) {
			e.preventDefault()
		}

		this.setState({ items: [...this.state.items, 'null'] })
	}

	render() {
		const ChildForm = this.ChildForm
		const handleChange = this.handleChange
		return (
			<div className="listForm">
				{
					this.state.items.map((item, idx) => {
						return (<ChildForm
							handleChange={(e) => {
								let items = [...this.state.items]
								items[idx] = (e.target && e.target.value) ? e.target.value : e
								this.setState({ items }, () => handleChange(this.state.items))
							}}
							value={item}
							key={idx}
						/>)
					})
				}
				<button className="newItem" onClick={this.newItem}>New nonterminal</button>
			</div>
		)
	}
}

ListForm.propTypes = {
	handleChange: PropTypes.func.isRequired
}

export default ListForm
