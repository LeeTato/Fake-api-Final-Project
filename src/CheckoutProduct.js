import React,{useState} from "react";
//import "./CheckoutProduct.css";
import styled from 'styled-components';

import { useStateValue } from "./Stateprovider";

function CheckoutProducts({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = (id) => {
    // console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };


  return (
    <Wrapper>
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
        

        <button onClick={() => removeFromBasket(id)}>DELET ITEM</button>
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper =styled.div`

.checkoutProduct {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}
.checkoutProduct__info {
  padding-left: 20px;
}
.checkoutProduct__info > button {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}
.checkoutProduct__image {
  object-fit: contain;
  width: 180px;
  height: 180px;
}
.checkoutProduct__rating {
  display: flex;
}
.checkoutProduct__title {
  font-size: 17px;
  font-weight: 800;
}

`;

export default CheckoutProducts;
