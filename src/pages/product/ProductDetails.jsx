import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";

function ProductDetails() {

    const { id } = useParams()
    const product = PRODUCTS.find(val => val.id == id)
    console.log("use params", id, product);

    return (
        <div>
            {`View Product Detail ID: ${product?.name}`}
        </div>
    );
}

export default ProductDetails;
