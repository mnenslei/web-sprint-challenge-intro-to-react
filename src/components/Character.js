// Write your Character component here
import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
    padding: 3%;
    text-align: center;
    font-weight: bold;
    opacity: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const PStyle = styled.div`
    font-size: 30px;
    color: greenyellow;
`

const Character = (props) => {
    const { name } = props

    return (
        <StyledDiv>
            <PStyle>
                {name}
            </PStyle>
        </StyledDiv>
    )

}

export default Character;