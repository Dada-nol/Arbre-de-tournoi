import Characters from "./characters";

function Sort() {
  return (
    <>
      <div className="champion_assassin">
        <h2>Assassin</h2>
        <Characters tags="Assassin"></Characters>
      </div>

      <div className="champion_fighter">
        <h2>Fighter</h2>
        <Characters tags="Fighter"></Characters>
      </div>

      <div className="champion_mage">
        <h2>Mage</h2>
        <Characters tags="Mage"></Characters>
      </div>

      <div className="champion_marksman">
        <h2>Marskman</h2>
        <Characters tags="Marksman"></Characters>
      </div>

      <div className="champion_support">
        <h2>Support</h2>
        <Characters tags="Support"></Characters>
      </div>

      <div className="champion_tank">
        <h2>Tank</h2>
        <Characters tags="Tank"></Characters>
      </div>
    </>
  );
}

export default Sort;
