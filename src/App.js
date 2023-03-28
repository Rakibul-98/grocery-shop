import { RouterProvider } from 'react-router-dom';
import './App.css';
import Favorites from './Pages/Favorites/Favorites';
import { router } from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Favorites/>
    </div>
  );
}

export default App;
