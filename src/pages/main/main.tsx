import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import { useNavigate } from "react-router-dom";
/* import NameCard from "../../components/namecard/namecard"; */
import axios from "axios";
export const Main = () => {
  const [number, setNumber] = useState(1);

  const [pokemonName, setPokemonName] = useState("");

  const [pokemonImage, setPokemonImage] = useState("");

  const [pokemonDetails, setPokemonDetails] = useState({});
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
      setPokemonDetails(resp.data);
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

      {
        <Card title={pokemonName}>
          <img
            className="max-w-[50vw] md:max-w-[20vw] w-full h-auto mx-auto"
            src={pokemonImage}
            alt=""
          />
          <div className="flex flex-col p-4 gap-6 text-center">
            <div>
              <h3>Pokemon ID</h3>
              <div className="mx-auto text-center max-w- md:max-w-[5vw] w-full bg-black text-slate-100">
                {number}
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/details", { state: pokemonDetails });
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
      }
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
