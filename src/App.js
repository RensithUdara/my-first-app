import './App.css';
import NavBar from './components/NavBar';
import SimpleCard  from './components/SimpleCard';

function App() {

  const url = 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D' ;
  
  const name = 'Rensith'
  
  return (
    <>

    {/* <img src='{url}' /> */}

    <h1 style = {{ 
      color : "white",
      padding : 10,
     }}>Hello World !</h1>

    <h1 style = {{ 
      color : "yellow",
      padding : 10
     
     }}>Hello {name} , {"Good" + " " + "Morning" }</h1>

    <h2 style = {{ 
      color : "white",
      padding : 10
     }}>
      Answer : 5 * 5 = {5 * 5} 
      
      </h2>

    </>

  // <div>
  //   <SimpleCard/> 
  //   <NavBar/>
  // </div>
);

}

export default App;
