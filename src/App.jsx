import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NadBar/NavBar'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff1744',
      },
      secondary: {
        main: '#5e35b1',
      },
    },
  });

function App() {
  return (
    <>
      <NavBar color='primary' />
      <ItemListContainer greeting="Bienvenidos a Mi Tienda !" />
    
    </>
  );
}

export default App;

