import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from "./Components/Header/Header";
import PageInfo from "./Components/Page/PageInfo";
import "./App.css"


const  App = () => {

  const [character, setCharacter] = useState()

  useEffect(() => { 
    console.log("rodou")
    const fetchCharacter = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/character"
        
      ) 
    } 
    
    fetchCharacter() 
      .then(res => {
        setCharacter(res.data);
      })
      .catch(err => {
        console.log("Error Message: ", err);
      })
      
  }, [])
    
  return (
    <div className='App'>
    <Header />
    {character ? <PageInfo character={character.results} /> : null}
    </div>
  );
}

export default App;