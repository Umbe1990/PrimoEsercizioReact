
import './App.css';
import AllTheBook from './components/AllTheBook';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Myfooter from './components/MyFooter'


function App() {
  
  return (
    <div className="App">
       <MyNav/>
       <Welcome/>
       <AllTheBook/>
      <Myfooter></Myfooter>
    </div>
  );
}

export default App;