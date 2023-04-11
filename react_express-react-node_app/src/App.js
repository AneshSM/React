import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const fetchData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setBackendData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {typeof backendData.users === undefined ? (
        <p>Loading...</p>
      ) : (
        backendData.users.mp((data, i) => {
          <p key={i}>{data}</p>;
        })
      )}
    </>
  );
}

export default App;
