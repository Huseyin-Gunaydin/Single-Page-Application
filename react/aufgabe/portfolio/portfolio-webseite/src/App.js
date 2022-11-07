import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Lebenslauf from "./components/Lebenslauf";
import Projekte from "./components/Projekte";
import Skills from "./components/Skills";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/">Main</Link>&nbsp;|&nbsp;
      <Link to="/">Lebenslauf</Link>&nbsp;|&nbsp;
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/lebenslauf" element={<Lebenslauf />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
