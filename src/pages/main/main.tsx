import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import { useLocation, useNavigate } from "react-router-dom";
/* import NameCard from "../../components/namecard/namecard"; */
import axios from "axios";
export const Main = () => {
  const { state } = useLocation();

  const [number, setNumber] = useState(() => {
    if (state) {
      return state;
    } else {
      return Math.floor(Math.random() * (1025 - 1) + 1);
    }
  });

  const [pokemonName, setPokemonName] = useState("");

  const [pokemonImage, setPokemonImage] = useState("");

  const navigate = useNavigate();
  const URL = "https://pokeapi.co/api/v2/pokemon";
  /* const exampleStudents = [
    {
      name: "Love",
      number: 1,
    },
    {
      name: "Junyoung",
      number: 2,
    },
    {
      name: "Hojin",
      number: 3,
    },
  ]; */
  /*   let valueNumber = 0; */
  const requestPokemon = async () => {
    try {
      const resp = await axios.get(`${URL}/${number}`);

      setPokemonName(resp.data.name);

      return resp;
    } catch (error) {
      console.log;
    }
  };

  const getPokemonImg = async () => {
    try {
      const resp = await axios.get(`${URL}/${number}`);
      console.log(resp);
      setPokemonImage(resp.data.sprites.front_default);
      localStorage.setItem("pokemonName", resp.data.name);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonImg();
  }, [pokemonName]);

  useEffect(() => {
    requestPokemon();
  }, [number]);

  return (
    <div className="flex flex-col p-4">
      <br />
      <button
        className="mx-auto px-4 py-2 bg-blue-600 text-white  rounded-md max-w-full md:max-w-[10vw] w-full truncate md:hover:max-w-[20vw] hover:bg-black hover:scale-105 transition-all duration-300 ease-in-out "
        onClick={() => {
          setNumber(Math.floor(Math.random() * (1025 - 1) + 1));
        }}
      >
        Get Random Pokemon
      </button>
      <br />

      <Card title={pokemonName}>
        {pokemonImage != "" && (
          <div className="flex flex-row items-center">
            <button
              type="button"
              onClick={() => {
                setNumber((p) => {
                  if (p === 1) {
                    return p;
                  }
                  return --p;
                });
              }}
              className="bg-gray-800 text-white rounded-l-md border-r max-h-[10%] max-w-auto border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <img
              className="max-w-[50vw] md:max-w-[20vw] w-full h-auto mx-auto"
              src={pokemonImage}
              alt=""
            />
            <button
              type="button"
              onClick={() => {
                setNumber((p) => {
                  if (p === 1025) {
                    return p;
                  }
                  return ++p;
                });
              }}
              className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        )}
        <div className="flex flex-col p-4 gap-6 text-center">
          <div>
            <h3>Pokemon ID</h3>
            <div className="mx-auto text-center max-w-[20%] md:max-w-[5vw] w-full bg-black text-slate-100">
              {number}
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/details", {
                state: { pokeId: number, from: "main" },
              });
            }}
            className="mx-auto px-4 py-2 bg-blue-600 text-white  rounded-md max-w-full md:max-w-[50%] w-full truncate md:hover:max-w-[20vw] hover:bg-black hover:scale-105 transition-all duration-300 ease-in-out "
          >
            Show Pokemon Details
          </button>
        </div>
        {/* <div className="flex flex-col p-4 gap-6 text-center ">
             <div className="mx-auto text-center max-w-full md:max-w-[5vw] w-full bg-black text-slate-100">
              {valueNumber}
            </div>
            <button
              className="mx-auto px-4 py-2 bg-blue-600 text-white  rounded-md max-w-full md:max-w-[7vw] w-full truncate md:hover:max-w-[20vw] hover:bg-black hover:scale-105 transition-all duration-300 ease-in-out "
              onClick={() => {
                valueNumber += 1;

                console.log(valueNumber);
              }}
            >
              Regular Let Button
            </button> 
          </div> */}
      </Card>

      <br />
      {
        <div className="flex flex-col gap-6 ">
          {/* {exampleStudents.map((exampleStudent, i) => {
            return <NameCard key={i} props={exampleStudent} />;
          })} */}
        </div>
      }
    </div>
  );
};
