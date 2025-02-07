import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Characters(props) {
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
      {champions
        .filter((champ) =>
          props.tags ? champ.tags.includes(props.tags) : true
        )
        .map((champ, index) => (
          <button key={index}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`}
              alt="portrait du champion"
            />
            <p>{champ.id}</p>
          </button>
        ))}
    </>
  );
}

Characters.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default Characters;
