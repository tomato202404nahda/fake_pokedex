import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/card/card";

export default function Details() {
  const { state } = useLocation();
  const pokemon = state;

  useEffect(() => {
    console.log(pokemon);
  });
  return (
    <>
      <div className="flex flex-col w-full text-center p-6">
        <h1 className="text-4xl font-black">{pokemon.name.toUpperCase()}</h1>
        <img
          className="max-w-[70vw] md:max-w-[20vw] w-full mx-auto"
          src={pokemon.sprites.front_default}
          alt=""
        />
        <div className="flex flex-row gap-6">
          <Card title="Abilities">
            {Object.keys(pokemon.abilities).map((key) => {
              return (
                <div className="border rounded">
                  {pokemon.abilities[key].ability.name.toUpperCase()}
                </div>
              );
            })}
          </Card>
          <Card title="Moves">
            {Object.keys(pokemon.moves).map((key) => {
              return (
                <div className="border rounded">
                  {pokemon.moves[key].move.name.toUpperCase()}
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
}
