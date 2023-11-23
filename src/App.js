import React from "react";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Skill from "./routes/Skill";
// import Contect from "./routes/Contect";
import { Route, Routes } from "react-router-dom";

// import { BrowserRouter as Route, Routes } from 'react-router-dom';
function App() {
  return (

    <>

      {/* //     <div className="j font-serif pr-16">hy this is abua biau</div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skill" element={<Skill />} />


      </Routes>


      {/* //     <Contect />
  //     <Home />
  //     <Project />
  //     <About /> */}
    </>
  );

  // return (
  //   <Router>
  //     <nav>
  //       <ul>
  //         <li><Link to="/">Home</Link></li>
  //         <li><Link to="/About">About</Link></li>
  //         <li><Link to="/Contect">Contect</Link></li>
  //         <li><Link to="/Projects">Projects</Link></li>
  //       </ul>
  //     </nav>

  //     <Route path="/" exact component={Home} />
  //     <Route path="/About" component={About} />
  //     <Route path="/Contect" component={Contect} />
  //     <Route path="/Project" component={Project} />
  //   </Router>
  // );

}

export default App;
