import useAllCars from "./hooks/useAllCars";

function App() {
  const {cars, updateCars} = useAllCars()

  if (!cars) return <>Loading...</>
  console.log(cars)
  
  return (
    <div>
      clever shuttle
    </div>
  );
}

export default App;
