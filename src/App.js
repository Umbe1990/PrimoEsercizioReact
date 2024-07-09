
import './App.css';
import AllTheBook from './components/AllTheBook';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Myfooter from './components/MyFooter'
import { useState } from "react";
import books from "./components/data/fantasy.json";


function App() {
  const[search,setSearch]= useState('')
    const[libriFiltrati, setLibriFiltrati]=useState(books)
    const filter =(e)=>{
      setSearch(e.target.value)
      const filtrati=books.filter((b)=>{
        return e.target.value.toLowerCase()===''? b : b.title.toLowerCase().includes(e.target.value.toLowerCase())|| b.asin.includes(e.target.value)
  })
  setLibriFiltrati(filtrati)
    }
  
  return (
    <div className="App">
       <MyNav filter={filter}/>
       <Welcome/>
       <AllTheBook libriFiltrati={libriFiltrati} />
      <Myfooter></Myfooter>
    </div>
  );
}

export default App;