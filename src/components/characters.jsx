import { useEffect, useState } from "react";

function Characters() {
  // https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json
  // https://ddragon.leagueoflegends.com/api/versions.json
  const [champions, setChampions] = useState([]);
  const [version, setVersion] = useState("");

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
        const champName = Object.keys(data);
        setChampions(champName);

        console.log(champName);
      } catch (error) {
        console.error(error.message);
      }
    }
    champList();
  }, []);

  useEffect(() => {
    async function Patch() {
      const url = "https://ddragon.leagueoflegends.com/api/versions.json";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const version = json[0];
        setVersion(version);
      } catch (error) {
        console.error(error.message);
      }
    }

    Patch();
  }, []);

  return (
    <>
      {champions.map((names, index) => (
        <button key={index}>
          <p>{names}</p>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${names}.png`}
            alt="portrait du champion"
          />
        </button>
      ))}
    </>
  );
}

export default Characters;
