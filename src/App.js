import './App.css';
import { useState } from 'react';
import {moviesData} from './Data';
import MovieList from './components/MovieList';
import AddMovie from './AddMovie';
import Search from './components/Search';

function App() {

  const [list, setList] =useState(moviesData)
  const handleAdd=(newMovie)=>setList([...list,newMovie])
  const [rating, setrating] = useState(1)
  const [text, settext] = useState("")
  const handleRate=(x)=>setrating(x)
  const handletext=(y)=>settext(y)

  return (
    <div className="main">
      <nav className='navBar'>

      <AddMovie handleAdd={handleAdd}/>
      <Search rating={rating}  text={text} handletext={handletext} handleRate={handleRate}/>
      </nav>
      <MovieList data={list.filter(el=>el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())&&el.rating>=rating)}/>
    </div>
  );
}

export default App;
