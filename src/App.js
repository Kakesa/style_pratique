import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';


export default function App() {
  return ( 
    <div className="App"> 
      <Header />
      <div className="App-body">
         <Main username="JohnDoe" num={5} />
         <SideBar />

      </div>
    </div> 
  ); 
}

