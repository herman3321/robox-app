import React from 'react';
import { useState, useEffect, ChangeEvent} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { GetData } from './utilis/data.utilis';


export type Monster = { 
  id: string
  name: string
  email: string
  phone: string
  website: string
}

const App = () =>{

  const [searchField, setSearchField] = useState('');
  const[monster, setMonster] = useState<Monster[]>([]);
  const [filteredMonster, setFilteredMonster] = useState(monster);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await GetData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonster(users)
    }
    fetchUsers()
  }, []);

  
  useEffect(() => {

    const newFilteredMonsters = monster.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
  
  }) 

  setFilteredMonster(newFilteredMonsters);
  }, [monster, searchField])


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void =>{
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
