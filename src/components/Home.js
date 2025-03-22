/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import background from "../images/background.png";
import styles from "./Home.module.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/products")
      .then(async (response) => {
        if (response.status !== 200) {
          throw new Error(`Failed to fetch products:${response.status}`);
        }
        const data = await response.json();
        const myProduct = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images[0],
          rating: product.rating,
        }));
        setProducts(myProduct);
      })
      .catch((e) => {
        setError(true);
        setErrorMessage(e.message);
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <img className={styles.background} src={background} alt="" />
        <div className={styles.row}>
          {loading && <p>Loading products...</p>}
          {error && <p style={{ color: "red" }}>Error: {errorMessage}</p>}
          {!loading &&
            !error &&
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
