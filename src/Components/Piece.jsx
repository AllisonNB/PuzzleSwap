import React from 'react';
import styled from 'styled-components';


const Item = styled.img`
    border: solid blue;
    max-width: 100%;
    height: auto;
    objectFit: cover;
`


const Piece = ({ image }) => {
    return (
        <Item src={image}></Item>
    )
}

export default Piece
