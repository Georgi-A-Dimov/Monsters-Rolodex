
import './App.css';
import { Component } from 'react';
import CardList from './card-list/card-component';
import SearchBox from './search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    });

    return (
      <div className="App">
        <SearchBox onSearchChange={onSearchChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
