import"./product.css"
import QuantityPicker from "../components/quantityPicker";
import { useEffect } from "react";



function Product(props){
    
    useEffect(function()
    {
    console.log("hello product");
},[]);

    return(
        <div className="product">
            <img src={"/img/"+props.data.image} alt=""></img>


        <h5>{props.data.title}</h5>
        <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;