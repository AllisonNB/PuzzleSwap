import { useRef, useEffect, useState } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import invariant from 'tiny-invariant';


import styled from 'styled-components';


const Item = styled.img`
    border: solid blue;
    max-width: 100%;
    height: auto;
    objectFit: cover;
    ${props => props.$dragging && 'opacity: 0.2;'}
`


const Piece = ({ image }) => {

    const ref = useRef(null);
    const [dragging, setDragging] = useState(false);



    useEffect(() => {
        const el = ref.current;
        invariant(el); //throws error if falsy value

        return draggable({
            element: el,
            getInitialData: () => ({ src: image }, console.log({ src: image })),
            onDragStart: () => setDragging(true),
            onDrop: () => setDragging(false),
        });

    }, [])


    return (
        <Item ref={ref} src={image} $dragging={dragging}></Item>
    )
}

export default Piece
