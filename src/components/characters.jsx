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
        const champName = Object.values(data).map((champ) => ({
          id: champ.id,
          tags: champ.tags,
        }));
        setChampions(champName);
        console.log(champName);

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
      <div className="champion_assassin">
        <h2>Assassin</h2>

        {champions.map((champ, index) => {
          if (champ.tags.includes("Assassin")) {
            return (
              <button key={index}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                  alt="portrait du champion"
                />
                <p>{champ.id}</p>
              </button>
            );
          }
        })}
      </div>

      <div className="champion_fighter">
        <h2>Fighter</h2>

        {champions.map((champ, index) => {
          if (champ.tags.includes("Fighter")) {
            return (
              <button key={index}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                  alt="portrait du champion"
                />
                <p>{champ.id}</p>
              </button>
            );
          }
        })}
      </div>

      <div className="champion_mage">
        <h2>Mage</h2>

        {champions.map((champ, index) => {
          if (champ.tags.includes("Mage")) {
            return (
              <button key={index}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                  alt="portrait du champion"
                />
                <p>{champ.id}</p>
              </button>
            );
          }
        })}
      </div>

      <div className="champion_marksman">
        <h2>Marskman</h2>

        {champions.map((champ, index) => {
          if (champ.tags.includes("Marksman")) {
            return (
              <button key={index}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                  alt="portrait du champion"
                />
                <p>{champ.id}</p>
              </button>
            );
          }
        })}
      </div>

      <div className="champion_support">
        <h2>Support</h2>

        {champions.map((champ, index) => {
          if (champ.tags.includes("Support")) {
            return (
              <button key={index}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                  alt="portrait du champion"
                />
                <p>{champ.id}</p>
              </button>
            );
          }
        })}
      </div>

      <div className="champion_tank">
        <h2>Tank</h2>

        {champions.map((champ, index) => {
          if (champ.tags.includes("Tank")) {
            return (
              <button key={index}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
                  alt="portrait du champion"
                />
                <p>{champ.id}</p>
              </button>
            );
          }
        })}
      </div>
    </>
  );
}

export default Characters;
