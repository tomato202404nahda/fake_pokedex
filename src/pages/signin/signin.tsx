import { useEffect, useState } from "react";

export default function SignIn() {
  const [pokemonName, setPokemonName] = useState("");
  useEffect(() => {
    const pokemon = localStorage.getItem("pokemonName");

    if (pokemon) {
      setPokemonName(pokemon);
    } else {
      alert("No Pokemon Selected");
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div>{pokemonName.toLocaleUpperCase()}</div>
    </div>
  );
}
