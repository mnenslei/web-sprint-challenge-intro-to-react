// Write your Character component here
import React from "react";

const Character = (props) => {
    const { name } = props

    return (
        <p>
            {name}
        </p>
    )

}

export default Character;