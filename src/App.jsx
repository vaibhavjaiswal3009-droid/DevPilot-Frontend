import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/terms" element={<Terms/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/docs" element={<Docs/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;