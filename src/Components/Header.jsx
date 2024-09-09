import styled from 'styled-components';


const HeaderBox = styled.div`
    text-align: center;
    color: #6a040f;

    & h1 {
    font-weight: 900;
    font-size: 4rem;
    margin: 10% 0 5% 0;
    
        @media (min-width: 768px) { 
            margin: 1%;
            font-size: 3rem;
        }
    }

    & h2 {
        font-size: 1.5rem;
        margin: 2% 0 2% 0;
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
