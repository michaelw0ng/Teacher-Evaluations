import { useEffect } from 'react';
import './App.css';


function App() {
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
      alert(req.responseText);
    });
    req.open("POST", "http://localhost:8080/");
    req.send("request");
  }, []);
  return (
    <div>
    </div>
  );
}

export default App;
