import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      
      <div id="main-wrapper">
        
        <Header />
         
          <Outlet />

      </div>

        <Footer />
        
      
    </>
  );
}

export default App;
