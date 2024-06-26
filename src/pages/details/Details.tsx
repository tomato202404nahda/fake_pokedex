import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import axios from "axios";
import { ApiURL } from "../../helper/const";

export default function Details() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const pokeId = state.pokeId;
  const [pokemon, setPokemon] = useState(null);

  const requestPokemon = async () => {
    try {
      const resp = await axios.get(`${ApiURL}/${pokeId}`);

      setPokemon(resp.data);
      return resp;
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    requestPokemon();
  }, [pokeId]);

  /* useEffect(() => {
    
  }); */

  if (pokemon) {
    return (
      <>
        <div className="flex flex-col bg-inherit w-full text-center p-6 dark:text-white">
          <div className="flex flex-row">
            <button
              type="button"
              onClick={() => {
                if (state.from === "main") {
                  navigate("/main", {
                    state: { pokeId: pokeId, from: "main" },
                  });
                } else {
                  navigate("/list", { state: { pokeId: pokeId } });
                }
              }}
              className="bg-slate-900 dark:bg-transparent text-white rounded-l-md border-r max-h-[10%] border-gray-100 dark:bg-slate-600 dark:hover:bg-slate-500 dark:border-blue-950 py-2 hover:bg-red-700 hover:text-white px-3"
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div className="text-center w-full">
              <h1 className="text-4xl dark:text-slate-100 font-black">
                {pokemon.name.toUpperCase()}
              </h1>
            </div>
            <div className="bg-transparent text-transparent rounded-r-md py-2  px-3">
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
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
          <div className="flex flex-row gap-6 mt-8 md:mt-4 gap-4 ">
            <div className="w-full ">
              <Card title="Abilities">
                {Object.keys(pokemon.abilities).map((key) => {
                  return (
                    <div key={key} className="border rounded grow">
                      {pokemon.abilities[key].ability.name.toUpperCase()}
                    </div>
                  );
                })}
              </Card>
            </div>
            <div className="w-full">
              <Card title="Moves">
                <div className="max-h-[30vh] box-content overflow-y-auto">
                  {Object.keys(pokemon.moves).map((key) => {
                    return (
                      <div key={key} className="border rounded">
                        {pokemon.moves[key].move.name.toUpperCase()}
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
