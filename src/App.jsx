import './App.css'
import AppRouter from './components/AppRouter';
import { useState } from 'react';
import items from './config/items.js';



function App() {
  // Luodaan tilamuuttuja, johon tallennetaan tuotelista.
  const [storeitems,setStoreitems] = useState(items);
  // Luodaan tilamuuttuja, johon tallennetaan pelin laskennalliset tiedot.
  const [stats, setStats] = useState({clicks: 0, balance: 0, increase: 1, itemstobuy: 0});
  const handleClick = () => {
  // Tehdään kopio stats-tilamuuttujasta.
  let newstats = {...stats}
  // Kasvataan sitruunoiden määrää kasvatusarvolla.
  newstats.balance = newstats.balance + newstats.increase;
  // Tallennetaan päivitetty stats-muuttuja.
  setStats(newstats); 
  }

  return (
    <AppRouter stats={stats} 
               storeitems={storeitems} 
               handleClick={handleClick} />
  )
}

export default App