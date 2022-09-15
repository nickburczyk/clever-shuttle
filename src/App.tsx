import { Header, Footer } from "./components/HeaderAndFooter/HeaderAndFooter";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css"
import AllCars from "./pages/All";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/all" element={<AllCars/>} />
            <Route path="/profile" element={<Profile/>} />  
            <Route path="/profile/:id" element={<Profile/>} />  
            <Route path="/create" element={<Create/>} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
