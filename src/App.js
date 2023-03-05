import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DocSidebar from "./components/documents/docSidebar/DocSidebar";
import Installation from "./components/documents/frontEnd/installation/Installation";
import Welcome from "./components/documents/frontEnd/welcome/Welcome";
import NotFound from "./components/pages/notFound/NotFound";
import Navbar from "./components/share/Navbar";
import "./components/share/shared.css";
import Customization from "./components/documents/frontEnd/customization/Customization";
import Home from "./components/home/Home";

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div data-theme={theme} className={`max-h-screen ${theme === "dark" && "bg-[#0F172A]"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<DocSidebar />}>
          <Route index element={<Welcome />} />
          <Route path="font-end/welcome" element={<Welcome />} />
          <Route path="font-end/installation" element={<Installation />} />
          <Route path="font-end/customization" element={<Customization />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
