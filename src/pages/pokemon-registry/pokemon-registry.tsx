import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiURL } from "../../helper/const";
import Card from "../../components/card/card";
import { useLocation, useNavigate } from "react-router-dom";

export default function PokemonRegistry() {
  const [pokemonList, setPokemonList] = useState([]);
  const { state } = useLocation();
  /*  let imgList: string[] = [""]; */
  /*  const [pokeIds, setPokeIds] = useState([]);
  const [pokeImages, setPokeImages] = useState([]); */
  const [pokeDatas, setPokeDatas] = useState([]);

  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const navigate = useNavigate();
  const requestPokeList = async () => {
    try {
      let target_url = "";

      if (state) {
        if (state.pokeId < 20) {
          target_url = ApiURL;
        } else {
          target_url = `${ApiURL}?offset=${
            Math.trunc((state.pokeId - 1) / 20) * 20
          }&limit=20`;
        }
      } else {
        target_url = ApiURL;
      }
      const resp = await axios.get(`${target_url}`);
      setPrevUrl(target_url);
      setNextUrl(resp.data.next);
      setPokemonList(resp.data.results);

      return resp;
    } catch (error) {
      return;
    }
  };
  const requestNextList = async () => {
    try {
      let target_url: string = "";
      if (next) {
        target_url = nextUrl;
      } else {
        target_url = prevUrl;
      }
      const resp = await axios.get(`${target_url}`);
      setPrevUrl(resp.data.previous);
      setNextUrl(resp.data.next);
      setPokemonList(resp.data.results);
    } catch (error) {
      return;
    }
  };

  const requestDatas = async (pokename) => {
    try {
      const resp = await axios.get(`${ApiURL}/${pokename}`);
      return resp.data;
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    if (page === 1) {
      requestPokeList();

      return;
    }
    requestNextList();
  }, [page]);

  useEffect(() => {
    /* setPokeImages([]);
    setPokeIds([]); */
    setPokeDatas([]);
    pokemonList.forEach(async (p) => {
      try {
        const b = await requestDatas(p.name);

        /* setPokeImages((prev) => [...prev, b.sprites.front_default]);
        setPokeIds((prev) => [...prev, b.id]); */
        setPokeDatas((prev) => [...prev, b]);
      } catch (error) {
        return;
      }
    });
  }, [pokemonList]);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-8 p-8">
        {pokeDatas.map((p, i) => {
          return (
            <Card key={i} number={p.id} title={p.name}>
              <div
                onClick={() => {
                  navigate("/details", {
                    state: { pokeId: p.id, from: "list" },
                  });
                }}
              >
                <img
                  src={p.sprites.front_default}
                  className="mx-auto w-[50%] h-auto"
                  alt=""
                />
              </div>
            </Card>
          );
        })}
      </div>
      <div className="hidden md:flex flex-row justify-between px-4 md:px-8 ">
        <button
          className={`${
            page === 1 ? "invisible" : ""
          } rounded bg-slate-600 p-4 m-4 font-semibold text-slate-100 hover:bg-slate-100 hover:text-slate-600 hover:border hover:border-slate-600 transition-all duration-300 ease-in-out`}
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage((prev) => (prev -= 1));
            setNext(() => false);
          }}
          type="button"
        >
          Prev
        </button>
        <button
          className="rounded bg-cyan-600 p-4 m-4 font-semibold text-slate-100 hover:bg-slate-100 hover:text-cyan-600 hover:border hover:border-cyan-600 transition-all duration-300 ease-in-out"
          onClick={() => {
            setPage((prev) => (prev += 1));
            setNext(() => true);
          }}
          type="button"
        >
          Next
        </button>
      </div>
    </>
  );
}
