import React from 'react'
import styled from 'styled-components';


const HeaderBox = styled.div`
    border: solid red;
    text-align: center;
`


const Header = () => {
    return (
        <HeaderBox>
            <h1>Puzzle Swap</h1>
            <h2>Swap the puzzle pieces to display the correct image</h2>
        </HeaderBox>
    )
}

export default Header
