import axios from "axios";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = (await axios.get("127.0.0.1:3100")).data;
      setData(data);
      console.log(data);
    };
    getData();
  }, []);
  return (
    <>
      <form action=""></form>
      <div></div>
    </>
  );
}

export default App;
