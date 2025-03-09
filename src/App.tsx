import { BrowserRouter, Route, Routes } from "react-router-dom";
import PresentationScript from "./components/PresentationScript/PresentationScript";
import EngineeringPresentation from "./components/PilotPresentation/PilotPresentation ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EngineeringPresentation />} />
          <Route path="/content" element={<PresentationScript />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;