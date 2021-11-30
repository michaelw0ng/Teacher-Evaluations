import { useEffect, useState } from "react";
import "./App.css";

import EvaluationPage from "./Components/EvaluationPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Evaluation");

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
      alert(req.responseText);
    });
    req.open("POST", "http://localhost:8080/");
    req.send("request");
  }, []);
  return <div>{currentPage === "Evaluation" && <EvaluationPage />}</div>;
}

export default App;
