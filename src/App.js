import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from'axios';
function App() {
  const [data,setData] =useState([])
  axios.get('https://jsonplaceholder.typicode.com/users')
 .then((response)=> {
    setData(response.data)
    console.log(data)
})
  return (
    <div className="App">
      {
       data.map((item)=>{
         return (
           <div>
             <h1>{item.name}</h1>
             <ul>
               <li>{item.username}</li>
               <li>{item.email}</li>
               <li>{item.address.street}</li>
               <li>{item.address.suite}</li>
               <li>{item.address.city}</li>
               <li>{item.address.zipcode}</li>
             </ul>
           </div>
         )
       }) 
      }
          </div>
  );
}

export default App;