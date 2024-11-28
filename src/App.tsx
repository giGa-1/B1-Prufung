import PilotPresentation from "./components/PilotPresentation/PilotPresentation ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PresentationScript from "./components/PresentationScript/PresentationScript";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PilotPresentation />} />
          <Route path="/content" element={<PresentationScript />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
