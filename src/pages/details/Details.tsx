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
        <Card title="Basic Information">
          <div className="border rounded grow flex flex-row px-8 justify-between">
            <p>Height</p>
            <p>{pokemon.height / 10}m</p>
          </div>
          <div className="border rounded grow flex flex-row px-8 justify-between">
            <p>Weight</p>
            <p>{pokemon.weight / 10}kg</p>
          </div>
        </Card>
        <div className="flex flex-row gap-6 flex-wrap">
          <Card title="Abilities">
            {Object.keys(pokemon.abilities).map((key) => {
              return (
                <div className="border rounded grow">
                  {pokemon.abilities[key].ability.name.toUpperCase()}
                </div>
              );
            })}
          </Card>
          <Card title="Moves">
            <div className="max-h-[30vh] box-content overflow-y-auto">
              {Object.keys(pokemon.moves).map((key) => {
                return (
                  <div className="border rounded">
                    {pokemon.moves[key].move.name.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
