import PilotPresentation from "./components/PilotPresentation/PilotPresentation ";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PresentationScript from "./components/PresentationScript/PresentationScript";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PilotPresentation />} />
          <Route path="/content" element={<PresentationScript />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
