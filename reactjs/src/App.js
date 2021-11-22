import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
      alert(req.responseText);
    });
    req.open("POST", "http://localhost:8080/");
    req.send("request");
  }, []);

  return <div>Hello</div>;
}

export default App;
