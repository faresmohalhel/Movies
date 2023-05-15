import axios from "axios";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const getData = async (url, post = false) => {
    let response;
    if (!post) {
      response = await axios.get(url);
    } else {
      response = await axios.post(url);
    }
    const responseData = response.data.data;
    setData(responseData);
    // console.log(responseData);
  };

  useEffect(() => {
    getData("http://127.0.0.1:3100");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let searchValue = event.target.search.value;
    searchValue = searchValue.trim().replace(" ", "%20");
    getData(`http://127.0.0.1:3100/search/${searchValue}`, true);
  };
  return (
    <>
      <form action="" className="mx-auto py-12" onSubmit={handleSubmit}>
        <div className="form-control ">
          <div className="input-group justify-center">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              id="search"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto place-items-center gap-y-3 gap-x-3">
        {data &&
          data.map((element) => (
            <Card
              key={Math.random()}
              image={element.images.jpg.image_url}
              title={element.title}
              episodes={element.episodes}
            />
          ))}
      </div>
    </>
  );
}

export default App;
