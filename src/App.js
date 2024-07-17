
import './App.css';
import AllTheBook from './components/AllTheBook';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Myfooter from './components/MyFooter'
import { useState } from "react";
import books from "./components/data/fantasy.json";
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';


function App() {
  const [search, setSearch] = useState('')
  const [libriFiltrati, setLibriFiltrati] = useState(books)
  const filter = (e) => {
    setSearch(e.target.value)
    const filtrati = books.filter((b) => {
      return e.target.value.toLowerCase() === '' ? b : b.title.toLowerCase().includes(e.target.value.toLowerCase()) || b.asin.includes(e.target.value)
    })
    setLibriFiltrati(filtrati)
  }

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <div className="App">
          <MyNav filter={filter} />
          <Welcome />
          <Routes>
            <Route path='/' element={<AllTheBook libriFiltrati={libriFiltrati} />} />
            <Route path='/bookdetails/:asin' element={<BookDetails />} />



          </Routes>
          <Myfooter></Myfooter>
        </div>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;