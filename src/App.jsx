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



const GridContainer = styled.div`
  border: solid green;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 5px 10px;
  padding: 0 0 0 50px;
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
      }
    })
  }, [images]);



  return (
    <>
      <Header />
      <GridContainer>
        {images.map((image) => <Piece key={image} image={image} alt={`image $`}></Piece>)}
      </GridContainer>
    </>
  )
}

export default App;
