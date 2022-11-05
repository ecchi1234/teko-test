import React from "react";
import { Button, Image } from "antd";
import { formatNumber } from "../../helper/formatNumber";
import "./ProductListItem.css";
function ProductListItem({
  productImage,
  productName,
  productCount,
  productPrice,
  productDiscount,
}) {
  return (
    <div className="item-wrapper">
      <Image width={"100%"} src={productImage} />
      <div className="product-name">{productName}</div>
      <div className="product-count">{`Còn ${productCount} sản phẩm`}</div>
      <div className="product-price">{`${formatNumber(productPrice)}đ`}</div>
      {productDiscount ? (
        <div className="product-discount">
          <div className="product-original-price">{`${formatNumber(
            (productPrice * (100 + productDiscount)) / 100
          )}đ`}</div>
          <div className="product-discount-rate">{`-${productDiscount}%`}</div>
        </div>
      ) : (
        <div className="product-discount">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      )}
      <Button danger>Thêm vào giỏ</Button>
    </div>
  );
}

export default ProductListItem;
