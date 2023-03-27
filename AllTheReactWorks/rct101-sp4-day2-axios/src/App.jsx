
import './App.css';
import Resturant from './componets/Restaurants';
import {Routes, Route} from 'react-router-dom'
import { EditRestaurant } from './componets/EditRestaurant';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Resturant/>}></Route>
        <Route path='/restaurant/edit/:id' element={<EditRestaurant/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
