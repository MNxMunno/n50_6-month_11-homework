import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, []);

  if (!product) {
    return <h2 className="container">Loading...</h2>;
  }

  return (
    <section className="single">
      <div className="container">
        <div className="content">
        <div className="cardd">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <b>{product?.price} $</b>
        </div>
        <div className="cardd">
        <img src={product?.images[0]} alt="img" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoute;
