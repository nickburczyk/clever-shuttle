import { Header, Footer } from "./components/HeaderAndFooter/HeaderAndFooter";
import useAllCars from "./hooks/useAllCars";
import "./App.css"

function App() {
  const {cars, updateCars} = useAllCars()

  if (!cars) return <>Loading...</>
  console.log(cars)
  
  return (
    <div className="App">
      <Header/>
      <main>
        Hello World
      </main>
      <Footer/>
    </div>
  );
}

export default App;
