import './App.css';
import Promo from './components/Promo';

function Header(){
  return <h1>Hello World</h1>;
}

function Exemple(){return <h1>Exemple</h1>;}
function App() {
  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Header /> 
      <Exemple/>
      <Promo />
    </div> 
  ); 
}

export default App;
