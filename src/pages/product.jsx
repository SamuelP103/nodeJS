import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useEffect } from "react";

function Product(props) {
  useEffect(function () {
    console.log("hello product");
  }, []);

return (
    <div className="product">
    <img src={"/img/" + props.data.image} alt=""></img>
    <h5>{props.data.title}</h5>
    <div className="prices">
        <label className="total">${props.data.price.toFixed(2)}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
    </div>
    <div className='controls'>
        <QuantityPicker></QuantityPicker>

        <button className="btn btn-small btn-success">Add</button>
    </div>
    </div>
);
}

export default Product;
