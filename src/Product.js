import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
//import "./Product.css";
import { useStateValue } from "./Stateprovider";



function Product() {
  const [{ basket, detail }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  console.log(basket);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products.products));
  }, []);
  console.log(products);
  // const addToBasket = (product) => {
  //   // dispatch the item into the data layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     payload: product,
  //   });
  // };
  const addToDetail = (product) => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_DETAIL",
      payload: product,
    });
  };
  console.log(detail);
  return (

    <Wrapper>
    <>
      {/* <Link to="/productdetail"> */}
      <h1 style={{ textAlign: "center" }}>
  
      </h1>
      <Link to="/productdetail" className="aa">
        <div className="product__row">
          {products.map((product) => (
            <div className="product">
              <div className="product__info">
                <h4>{product.title}</h4>
                {/* <p>{product.description}</p> */}
                <p className="product__price">
                  <small>$</small>
                  <strong>{product.price}</strong>
                </p>
              </div>

              <img
                src={product.image}
                alt=""
                onClick={() => addToDetail(product)}
              />
              {/* </Link> */}
              {/* <button onClick={() => addToBasket(product)}>Add to Basket</button> */}

              {/* <button>detail</button> */}
            </div>
          ))}
        </div>
      </Link>
    </>
    </Wrapper>
  );
};

const Wrapper=styled.div`
.product {
  margin: 10px;
  padding: 20px;
  width: 300px;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
  box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 0.1s ease-in;
}
.product__row {
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
}
.product > img {
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}
.product__price {
  margin-top: 5px;
}

.product__info {
  height: 100px;
  margin-bottom: 15px;
}

.product:hover {
  transform: scale(1.05);
}
.aa {
  text-decoration: none;
  color: #000;
}


`;
export default Product;
