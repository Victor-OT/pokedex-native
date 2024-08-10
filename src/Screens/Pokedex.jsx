import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonList from "../Components/PokemonList";
import { POKEAPI_HOST } from "../utils/constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokedex () {
    const Stack = createNativeStackNavigator()

    const urlApi = `${POKEAPI_HOST}?limit=20&offset=0`
    const [data, setData] = useState(null)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    useEffect(() => {
        if (data) {
            const detailsPromises = data.map(pokemon => 
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonData => ({
                        id: pokemonData.id,
                        name: pokemonData.name,
                        type: pokemonData.types[0].type.name,
                        order: pokemonData.order,
                        image: pokemonData.sprites.other['official-artwork'].front_default
                    }))
                    .catch(error => {
                        console.error('Error fetching pokemon details:', error)
                        return null
                    })
            );

            // Usa Promise.all para esperar a que todas las promesas se resuelvan
            Promise.all(detailsPromises)
                .then(details => {
                    setPokemons(details.filter(detail => detail !== null))
                })
                .catch(error => console.error('Error in fetching all pokemon details:', error))
        }
    }, [data])


    return (
       <SafeAreaView>
        <PokemonList pokemons={pokemons}/>
       </SafeAreaView> 
    )
}