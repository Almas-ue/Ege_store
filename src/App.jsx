import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Glav from "./block-element/glav/Glav.jsx";
import First_page from "./block-element/first_page/first_page";
import Heart from "./block-element/heart/heart.jsx";

function App() {
  return (
    <Router basename="/Ege_store">
      <Routes>
        <Route path="/" element={<First_page />} />
        <Route path="/glav" element={<Glav />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
    </Router>
  );
}

export default App;
