import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component'
import './App.css';
 
const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setCats(users)
    );
  }, []); // [calback function, array of dependencies]  Leaving the array of dependencies empty will cause it to run only once.

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField);
    });

    setFilteredCats(newFilteredCats);
  }, [cats, searchField]);  

  const onSearchChange = (event) => {   
    const searchFieldString = event.target.value.toLocaleLowerCase();       
    setSearchField(searchFieldString);
  }

  return (
    <div className="App"> 
      <h1 className="app-title">Cat Rolodex</h1>
      <SearchBox 
        className='cats-search-box'
        placeholder='Search cats'
        onChangeHandler={onSearchChange}
      />
      <CardList itemAltPrefix='Cat' listItems={filteredCats} />
    </div>
  )
}

export default App;
