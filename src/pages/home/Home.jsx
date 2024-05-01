import React, { useState, useEffect } from "react";
import axios from "../../api";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const [category, setCategory] = useState("all");
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const { data: categories } = useFetch("/products/categories");

  let url = `/products${
    category === "all" ? "" : `/category/${category}`
  }?limit=${count * 10}`;
  const { data, loading } = useFetch(url, count, category);

  let options = categories?.data?.map((el, inx) => (
    <option key={inx} value={el}>
      {el}
    </option>
  ));

  // useEffect(() => {
  //   // setLoading(true);
  //   axios
  //     .get(`/products/search?q=${search}`)
  //     .then((res) => setData(res.data.products))
  //     .catch((res) => console.log(res))
  //     .finally(() => setLoading(false));
  // }, [search]);

  return (
    <section className="home">
      
      <select
      className="container"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name=""
        id=""
      >
        <option value="all">All</option>
        {options}
      </select>
      <Products loading={loading} data={data?.data?.products} />
      <div className="btn">
      <button
        style={{ marginBottom: "200px" }}
        onClick={() => setCount((p) => p + 1)}
        className="btn-blue"
      >
        See More
      </button>
      </div>
    
    </section>
  );
}

export default Home;
