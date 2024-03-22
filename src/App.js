import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentdidmount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then(
				(users) =>
					this.setState(() => {
						return { monsters: users };
					}),
				() => {
					console.log(this.state);
				},
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase();

		// Always update the state, even when input value is empty
		this.setState(() => {
			return { searchField };
		});
	};
	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		console.log('render');
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={onSearchChange}
				/>

				{filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1> {monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
