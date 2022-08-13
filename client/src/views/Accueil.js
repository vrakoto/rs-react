// import { useState } from 'react'
import Post from "../components/Post"


function Accueil () {
    return (
        <>
            <h1>Bonjour</h1>
            <Post nom="Doe"
                prenom="John"
                date_publication="29/05/2020"
                post_text="Salut les gens"
                nb_like="30"
                nb_comment="15"
            />

            <Post nom="Samantha"
                prenom="Elisa"
                date_publication="27/05/2020"
                post_text="Je suis nouvelle"
                nb_like="50"
                nb_comment="35"
            />
        </>
    )
}

export default Accueil