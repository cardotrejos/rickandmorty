import React, { Fragment,useState,useEffect } from "react";
import Card from './Card';
import axios from 'axios';
import "./App.css";

function App() {
  
  const [data, setData] =  useState({characters:[]})

  useEffect(() => {
	const fetchCharacters = async () =>{
		const response  =  await axios.get('https://rickandmortyapi.com/api/character/')
		const {results} =  response.data
		setData({characters:results});
	}
    fetchCharacters();

  },[])

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="/">
          Rick & Morty App
        </a>
      </nav>
      <section className="container my-4">
        <div className="row my-4">
        {
          data.characters.map((character,index) => (
              <Card character={character} key={index}/>
          ))
        }
  
        </div>
      </section>
    </Fragment>
  );
}

export default App;