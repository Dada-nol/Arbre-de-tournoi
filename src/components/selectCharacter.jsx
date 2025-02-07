import { useEffect, useRef, useState } from "react";
import SortByName from "./SortBy/name";
import SortByRole from "./SortBy/role";

function SelectCharacter() {
  const [selectedSort, setSelectedSort] = useState("");
  const selectRef = useRef(null); // Référence pour détecter les clics extérieurs

  // Gérer la fermeture si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setSelectedSort(""); // Réinitialise si on clique en dehors
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <select
        multiple={true}
        name="selectChamp"
        id="selectChamp"
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
      >
        <option value="">Sélectionner un tri</option>
        <option value="sortByName">Tier par nom</option>
        <option value="sortByRole">Trier par rôle</option>
      </select>

      {selectedSort && (
        <section>
          {selectedSort === "sortByName" ? (
            <SortByName></SortByName>
          ) : (
            <SortByRole></SortByRole>
          )}
        </section>
      )}
    </>
  );
}

export default SelectCharacter;
