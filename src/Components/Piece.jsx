import { useRef, useEffect, useState } from 'react';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import invariant from 'tiny-invariant';


import styled from 'styled-components';


const Item = styled.img`
    border: ${props => props.$isDraggedOver ? 'solid red;' : 'solid white;'}
    border-radius: 10px;    
    max-width: 100%;
    height: auto;
    objectFit: cover;
    ${props => props.$dragging === 'dragging' && 'opacity: 0.2;'}
`


const Piece = ({ image }) => {

    const ref = useRef(null);
    const [dragging, setDragging] = useState('idle');
    const [isDraggedOver, setIsDraggedOver] = useState(false);


    useEffect(() => {
        const el = ref.current;
        invariant(el); //throws error if falsy value

        return combine(
            draggable({
                element: el,
                getInitialData: () => ({ src: image }),
                onDragStart: () => setDragging('dragging'),
                onDrop: () => setDragging('idle'),
            }),
            dropTargetForElements({
                element: el,
                onDragEnter: () => setIsDraggedOver(true),
                onDragLeave: () => setIsDraggedOver(false),
                onDrop: () => setIsDraggedOver(false),
                canDrop: ({ source }) => source.data.src !== image,
                getIsSticky: () => true,
            })
        );
    }, [])


    return (
        <Item ref={ref} src={image} $dragging={dragging} $isDraggedOver={isDraggedOver}></Item>
    )
}

export default Piece
