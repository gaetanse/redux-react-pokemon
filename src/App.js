import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './containers/home/Home'
import Detail from './containers/detail/DetailPokemon'
import Menu from './components/navBar/NavBar'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Menu/>
      <div style={{margin: "25px 25px"}}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
