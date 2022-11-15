import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [products, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://70650169-a320-4c2d-80ec-1c6145615e34.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (products === null) {
    return <h1>상품정보를 불러오고 있습니다.....</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={products.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{products.seller}</span>
      </div>
      <div id="contents-box">
        <div id="createdAt">2022년 11월 15일</div>
        <div id="name">{products.name}</div>
        <div id="price">{products.price}원</div>

        <div id="description">{products.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
