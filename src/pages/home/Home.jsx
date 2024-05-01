import React, { useState, useEffect } from "react";
import axios from "../../api";
import Products from "../../components/products/Products";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=${count * 5}`)
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, [count]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/search?q=${search}`)
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="home">
      <input
        style={{ padding: "5px", outline: "none", margin: "auto" }}
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Products loading={loading} data={data} />
      <button
        style={{ marginBottom: "200px" }}
        onClick={() => setCount((p) => p + 1)}
        className="btn-blue"
      >
        See More
      </button>
    </div>
  );
}

export default Home;
