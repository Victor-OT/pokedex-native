import { Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonList(props) {
    const {pokemons} = props
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 10
        },
        item: {
            fontSize: 20
        }
    })

  return (
    <FlatList 
    data={pokemons}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
    style={styles.container}
    />
  )
}