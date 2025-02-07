import { useState } from "react";
import SortByName from "./SortBy/name";
import SortByRole from "./SortBy/role";

function SelectCharacter() {
  const [selectedSort, setSelectedSort] = useState("sortByName");
  return (
    <>
      <select
        name="selectChamp"
        id="selectChamp"
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
      >
        <option value="sortByName">Tier par nom</option>
        <option value="sortByRole">Trier par rôle</option>
      </select>

      <section id="layout">
        {selectedSort === "sortByName" ? (
          <SortByName></SortByName>
        ) : (
          <SortByRole></SortByRole>
        )}
      </section>
    </>
  );
}

export default SelectCharacter;
