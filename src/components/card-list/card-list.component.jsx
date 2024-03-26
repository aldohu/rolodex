import { Component } from 'react';
import CardContainer from '../card-container/card-container.component'; // Import the CardContainer component

import './card-list.styles.css';
class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { name, email, id } = monster;
					return (
						<CardContainer
							className="card-container"
							key={id}
							id={id} // Pass id, name, and email as props to CardContainer
							name={name}
							email={email}
						/>
					);
				})}
			</div>
		);
	}
}

export default CardList;
