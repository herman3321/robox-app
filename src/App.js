import { useState, useEffect} from 'react';

// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () =>{

  const [searchField, setSearchField] = useState('');
  const[monster, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monster);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonster(users));

  }, []);

  
  useEffect(() => {

    const newFilteredMonsters = monster.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
  
  }) 

  setFilteredMonster(newFilteredMonsters);
  }, [monster, searchField])


  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);



  }

  return(
    <div className='App'>
      <h1 className='App-title'>Monsters</h1>
    <SearchBox 
    className='monster-search-box'
    onChangeHandler={onSearchChange}
    placeholder='search Monsters'/>

    <CardList monster={filteredMonster}/>
    
  </div>

  );
  }

export default App;
