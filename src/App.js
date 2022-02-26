import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from "./routes/Form";
import Home from "./routes/Home";
import FormId from "./routes/FormId";
import FormView from "./routes/FormView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<FormView />} />
        <Route path="/form" element={<Form />} />
        <Route path="/post/:id" element={<FormId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;