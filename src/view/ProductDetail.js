import React from "react";
import { Image } from "antd";
import "./ProductDetail.css";
import productData from "../data/data.json";
import ProductListItem from "./ProductListItem";
import { formatNumber } from "../helper/formatNumber";
function ProductDetail() {
  const data = productData;
  return (
    <div className="page-wrapper">
      <Image width={"100%"} src={data.image} />

      <div className="final-price">{`${formatNumber(data.price)}đ`}</div>
      <div className="discount-price">
        <div className="original-price">{`${formatNumber(
          (data.price * (100 + data.discountPercent)) / 100
        )}đ`}</div>
        <div className="discount-rate">{`-${data.discountPercent}%`}</div>
      </div>

      <div className="product-title">{data.name}</div>
      <div className="product-seller">
        <span>By</span>
        <span className="seller-name">{` ${data.seller}`}</span>
      </div>

      <div className="related-product">
        <div className="title">Sản phẩm liên quan</div>
        <div className="list-product">
          {data.relatedProducts.map((productItem) => (
            <ProductListItem
              productName={productItem.name}
              productImage={productItem.image}
              productPrice={productItem.price}
              productCount={productItem.availableQuantity}
              productDiscount={productItem.discountPercent}
              key={productItem.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
