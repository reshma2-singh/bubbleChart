
import './App.css';
import {useState,useEffect} from 'react'
import Header from './component/Header'
import Home from './component/Home'

import axios from 'axios'
function App() {
  const[result,setResult] = useState([])
  //fetching api of world data
useEffect(()=>{
const getCountry= async ()=>{
  try{
    const country = await axios.get("https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json")
 console.log(country.data,'09')
    let val = Object.values(country.data);
  val.sort((a,b)=>{
    return b.population-a.population 
  }) 
  setResult(val)
}
  catch(err){
    console.log(err)
  }
}
  getCountry()
},[])
  return (
    <div >
   <Header/>
   <Home result={result}/>
  
    </div>
  );
}

export default App;
