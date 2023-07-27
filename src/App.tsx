
import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

    type Character = {
            id: string;
            name: string;
            image: string;
            origin: {
                name: string;
            };
    }

    function AllCharacters() {
        const [characters, setCharacters] = useState<undefined|Character[]>(undefined);
        useEffect(() =>{
            axios({
                method: 'get',
                url: 'https://rickandmortyapi.com/api/character',
            })
                .then(function (response) {
                    console.log("GET / READ")
                    console.log("Response status: ",response.status)
                    console.log("Response data: ",response.data)
                    setCharacters(response.data.results)
                });
        },[]);
        return (characters === undefined ? <div>Loading Characters</div> : (
            <ul className={"gallery"}>
                {characters.map(char =>
                        <li key={char.id} className={"character-card"}>
                            <h2>{char.name}</h2>
                            <img src={char.image} alt={"Avatar"}/>
                            <h3>{char.origin.name}</h3>
                        </li>
                    )}
            </ul>

        ));
    }

    function Ueberschrift() {
        return (<div>
            <h1>Rick and Morty + AXIOS APP</h1>
        </div>);
    }


    function App() {
        return<div>
            <Ueberschrift></Ueberschrift>
            <AllCharacters></AllCharacters>
        </div>

    }

export default App
