import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://70650169-a320-4c2d-80ec-1c6145615e34.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/오롯이상점로고.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/오롯이 배너.png" />
        </div>
        <h1>판매되는 힐링 상품들</h1>
        <div id="product-list">
          {products.map(function (products, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={products.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{products.name}</span>
                  <span className="product-price">{products.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    ></img>
                    <span>{products.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;