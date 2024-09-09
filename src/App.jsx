import { useEffect, useState, useRef } from 'react'
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import styled from 'styled-components';

import Piece from './Components/Piece';
import ear from '/ear.jpg'
import ear2 from '/ear2.jpg';
import ear3 from '/ear3.jpg';
import eye from '/eye.jpg';
import eye2 from '/eye2.jpg';
import head from '/head.jpg';
import nose from '/nose.jpg';
import whisker from '/whisker.jpg';
import whisker2 from '/whisker2.jpg';
import Header from './Components/Header';

import Modal from './Components/Modal';


const AppContainer = styled.div`
  display: grid;
  place-items: center;
`

const GridContainer = styled.div`
  display: grid;
  padding: 10px;
  margin: 0 5% 0 5%;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 600px) {
    gap: 2px 4px;
  }

  @media (min-width: 601px) and (max-width: 1024px) { 
    margin: 0 10% 0 10%;
    gap: 5px 10px;
  }

  @media (min-width: 1024px) {
    margin: 0 20% 0 20%;
    gap: 5px 10px;
  }
`


function App() {

  const [images, setImages] = useState([
    ear, ear2, ear3, eye, eye2, head, nose, whisker, whisker2
  ])

  const modal = useRef();

  //monitor where elements are dropped
  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          return
        }

        const destinationSrc = destination.data.src;
        const startSrc = source.data.src;

        //swapping positions
        const updatedImages = [...images];
        updatedImages[images.indexOf(startSrc)] = destinationSrc;
        updatedImages[images.indexOf(destinationSrc)] = startSrc;
        setImages(updatedImages);
      }
    })
  }, [images]);


  //feedback on success
  useEffect(() => {
    const correctPuzzle = [ear3, head, ear2, ear, eye2, eye, whisker, whisker2, nose];

    const evaluatePuzzle = (array1, array2) => {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
      return true;
    }

    let isCorrectPuzzle = evaluatePuzzle(correctPuzzle, images);
    console.log(isCorrectPuzzle)

    if (isCorrectPuzzle) {
      modal.current.open();
    }

  }, [images])



  const handleReset = () => {
    console.log('puzzle reset!')
  }


  return (
    <AppContainer>
      <Modal ref={modal} onReset={handleReset} />
      <Header />
      <GridContainer>
        {images.map((image) => <Piece key={image} image={image} alt={`puzzle piece`}></Piece>)}
      </GridContainer>
    </AppContainer>
  )
}

export default App;
