import { useEffect, useState } from "react";

function Characters() {
  // https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json

  const [champions, setChampions] = useState([]);

  useEffect(() => {
    async function champList() {
      const url =
        "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const data = json.data;
        const champName = Object.values(data).map((champ) => champ.name);
        setChampions(champName);
        console.log(champName);
      } catch (error) {
        console.error(error.message);
      }
    }
    champList();
  }, []);

  return (
    <>
      <ul>
        {champions.map((names, index) => (
          <li key={index}>{names}</li>
        ))}
      </ul>
    </>
  );
}

export default Characters;
