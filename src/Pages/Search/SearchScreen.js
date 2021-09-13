import React from 'react'
import { useParams } from 'react-router-dom'

export const SearchScreen = () => {
    const { param } = useParams()

    return (
        <section className="SearchScreen">
            <h3>SearchScreen con parametro {param}</h3>
        </section>
    )
}
