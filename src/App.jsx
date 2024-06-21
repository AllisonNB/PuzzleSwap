import { useEffect, useState } from 'react'
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
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


const AppContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`

const GridContainer = styled.div`
  display: grid;
  padding: 10px;


  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 150px);
    gap: 2px 4px;
  }

  @media (min-width: 601px) and (max-width: 1024px) { 
    grid-template-columns: repeat(3, 150px);
    gap: 5px 10px;
  }


  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 200px);
    gap: 5px 10px;
  }
`


function App() {

  const [images, setImages] = useState([
    ear, ear2, ear3, eye, eye2, head, nose, whisker, whisker2
  ])

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
        console.log('startSrc: ', startSrc);
        console.log('destinationSrc: ', destinationSrc);

        //swapping positions
        const updatedImages = [...images];
        updatedImages[images.indexOf(startSrc)] = destinationSrc;
        updatedImages[images.indexOf(destinationSrc)] = startSrc;
        setImages(updatedImages);

        //feedback on success
        const correctPuzzle = [ear3, head, ear2, ear, eye2, eye, whisker, whisker2, nose];
        const evaluatePuzzle = (array1, array2) => {
          for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
              return false;
            }
          }
          return true;
        }
        let isCorrectPuzzle = evaluatePuzzle(correctPuzzle, updatedImages);
      }
    })
  }, [images]);



  return (
    <AppContainer>
      <Header />
      <GridContainer>
        {images.map((image) => <Piece key={image} image={image} alt={`image $`} onContextMenu={(e) => (e.preventDefault())} ></Piece>)}
      </GridContainer>
    </AppContainer>
  )
}

export default App;
