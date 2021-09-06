import React from "react";
import styled from 'styled-components';
//import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";;


function Header() {
  const [{ basket, }, dispatch] = useStateValue();
  return (
    <Wrapper>
    <div className="nav__bar">
    <Link to="/"><h1>FAKE STORE</h1></Link>
      <div className="log__nav">
        <Link to="/cart" className="header__clearlink">
          <div className="basket">
            <ShoppingBasketIcon />
            <span className="user__option basket__Count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper =styled.div`
.nav__bar {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: pink;
  position: sticky;
  top: 0;
  z-index: 100;
  >h1{
    color:black
  }
}
.log__nav {
  display: flex;
  justify-content: space-between;
}

.link__option {
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: 100px;
  color: black;
  
}

.user {
  font-size: 10px;
}

.user__option {
  font-size: 13px;
  font-weight: 800;
  margin-left: 500px;
}

.basket {
  display: flex;
  align-items: center;
  margin-left: 700px;
  color: black;
}
.basket__Count {
  margin-left: 10px;
  margin-right: 10px;
}
.link {
  text-decoration: none;
}
`;
export default Header;
