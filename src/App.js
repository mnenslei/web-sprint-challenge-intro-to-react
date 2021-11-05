import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const MainDiv = styled.div`
  border: dashed;
  padding: 2%;
`

const H1Border = styled.h1`
  font-weight: bold;
  font-size: 35px;
  padding: 2%;
  color: orangered;
  opacity: .65;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starData, setStarData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log(res);
      setStarData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <MainDiv className="App">
      <H1Border className="Header">Characters</H1Border>
      {
      starData.map((star) => (
        <Character name={star.name} key={star.created}/>
      ))
      }
    </MainDiv>
  );
}

export default App;