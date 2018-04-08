import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

		this.setState({ items: [...this.state.items, []] })
	}

	render() {
		const ChildForm = this.ChildForm
		return (
			<div>
				{
					this.state.items.map((item, idx) => {
						return (<ChildForm
							handleChange={(e) => {
								item = e.target.value
								this.setState({ items: this.state.items })
								this.handleChange(this.state.items)
							}}
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
