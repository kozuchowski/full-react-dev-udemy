import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  state = {
    monsters:[],
    search: ''
  }
  

  componentDidMount(){
    fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json() )
    .then( users => this.setState({ monsters:users }))
    
  }
  
 

  handleChange = (e) =>{
    this.setState({search:e.target.value}
      ) }

  render(){
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(search.toLowerCase()) )
    return(
        <div className="app">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="search monster" handleChange={this.handleChange} />
          <CardList monsters = { filteredMonsters } />
        </div>
    );
  }
}


export default App;
