import React from 'react'
import styled from 'styled-components';


const HeaderBox = styled.div`
    text-align: center;
    color: #6a040f;

    & h1 {
    font-weight: 900;
    font-size: 3rem;
    margin-top: 10%;
    }
`


const Header = () => {
    return (
        <>
            <HeaderBox>
                <h1>Puzzle Swap</h1>
                <h2>Swap the puzzle pieces to display the correct image</h2>
            </HeaderBox>
        </>
    )
}

export default Header
