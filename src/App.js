import "./App.css";
import { Header, Footer, Home, PageTwo } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/test-two" element={<Home />} />
               <Route path="/" element={<Home />} />
               <Route path="/pagetwo" element={<PageTwo />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
