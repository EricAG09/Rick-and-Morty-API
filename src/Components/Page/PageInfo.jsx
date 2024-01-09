import React from "react"
import Cards from "./Cards"

const PageInfo = ({ character }) => {
    return (
        <div>
            { character && character.map((character, index) => {
                return <Cards key={index} character={character} />
            }) }
        </div>
    )
}

export default PageInfo