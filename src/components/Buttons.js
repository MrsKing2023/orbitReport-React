import satData from "./components/satData";



const Buttons = () => {
  return (
    <div>
      <button> filterByType={currentType}
        setSat={data}
        displaySats {newSatDisplay} </button>
      <button>All Orbits</button>
      </div>
  );
};


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

{displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
//code continues

export default Buttons;
