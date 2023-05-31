import Hero from "./components/Hero";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import data from "./data"

function App() {

  const fetchData = data.map((info) => {
    return (
      <Item
        key={info.id}
        info={info}
      />)
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div>{fetchData}</div>
    </div>
  );
}

export default App;
