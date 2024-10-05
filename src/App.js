import './App.css';
import NavBar from './components/NavBar';
import SimpleCard  from './components/SimpleCard';

function App() {

  const url = 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D' ;
  return (
    <>
    <img src='{url}' />
    </>
  // <div>
  //   <SimpleCard/> 
  //   <NavBar/>
  // </div>
);

}

export default App;
