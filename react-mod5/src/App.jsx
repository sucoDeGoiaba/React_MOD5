import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 
import Header from "./components/header/Header";

import AddProd from "./pages/addProduto/AddProd";

function App() {
  return (
    <>
      <Header/>
      <Router>
        <section>
          {/* https://www.w3schools.com/css/css_overflow.asp */}
          {/* https://www.codedaily.io/tutorials/Build-a-Reusable-Scroll-List-Component-with-Animated-scrollTo-in-React */}
          {/* Entra a parte do Fabiano */}
        </section>
        <Routes>
            <Route path="/"/>
            <Route path="/adicionar" element={<main><AddProd/></main>}/>

        </Routes>
      </Router>
    </>

  );
}

export default App;
