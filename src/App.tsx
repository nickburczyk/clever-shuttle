import { Header, Footer } from "./components/HeaderAndFooter/HeaderAndFooter";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css"
import AllCars from "./pages/All";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <main>
          <Routes>
            <Route path="/all" element={<AllCars/>} />

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
