import { Header, Footer } from "./components/HeaderAndFooter/HeaderAndFooter";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import useAllCars from "./hooks/useAllCars";
import "./App.css"

function App() {
  const {cars, updateCars} = useAllCars()

  if (!cars) return <>Loading...</>
  console.log(cars)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <main>
          <Routes>
            <Route 
              path="/all" 
              element={
                <>All Cars List</>
              }
            />

            <Route 
              path="/lookup"
              element={
                <>Lookup Individual Car</>
              }  
            />

            <Route 
              path="/profile"
              element={
                <>Individual Car Profile</>
              }  
            />  

            <Route 
              path="/"
              element={
                <>HOME</>
              }  
            />
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
