import satData from "./components/satData";



const Buttons = () => {
  return (
    <div>
      <button>{sat} Orbit</button>
      <button>All Orbits</button>
      </div>
  );
};


{displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
//code continues
Low Orbit
Medium Orbit
High Orbit

export default Buttons;
