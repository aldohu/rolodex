import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder="search monsters"
					className="monsters-search-box"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
