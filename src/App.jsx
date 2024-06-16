import React from 'react'
import styled from 'styled-components';

import Piece from './Components/Piece';
import ear from './assets/ear.jpg'
import ear2 from './assets/ear2.jpg';
import ear3 from './assets/ear3.jpg';
import eye from './assets/eye.jpg';
import eye2 from './assets/eye2.jpg';
import head from './assets/head.jpg';
import nose from './assets/nose.jpg';
import whisker from './assets/whisker.jpg';
import whisker2 from './assets/whisker2.jpg';
import Header from './Components/Header';



const GridContainer = styled.div`
  border: solid green;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 10px 20px;
  padding: 0 0 0 50px;
`

const images = [ear, ear2, ear3, eye, eye2, head, nose, whisker, whisker2]



function App() {


  return (
    <>
      <Header />
      <GridContainer>
        {images.map((image, index) => <Piece key={index} image={image} alt={`image $`}></Piece>)}
      </GridContainer>
    </>
  )
}

export default App;
