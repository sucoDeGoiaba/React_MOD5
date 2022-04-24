import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 

import AddProd from "./pages/addProduto/AddProd";

function App() {
  return (
  //  <AddProd/>
  <Router>
    {/* Entra a parte do Fabiano */}
    <Routes>
      <Route path="/"/>
      <Route path="/adicionar" element={ <AddProd/> }/>
    </Routes>
  </Router>

  );
}

export default App;
