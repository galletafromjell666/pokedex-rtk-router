import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Colors } from "../helpers/backgroundColor";
export const pokeApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => `pokemon?limit=94
      `,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response) => {
        response.color = Colors[response.types[0].type.name];
        return response
      },
    }),
    getEvolutionChain: builder.query({
      query: (id) => `evolution-chain/${id}/`
    })
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery, useGetEvolutionChainQuery } = pokeApi;
