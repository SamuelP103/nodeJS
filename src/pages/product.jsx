import"./product.css"
import QuantityPicker from "../components/quantityPicker";

function Product1() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 1"></img>
            <h3>Camera $99.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}


function Product2() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 2"></img>
            <h3>Iphone 5 $29.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}



function Product3() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 3"></img>
            <h3>Camera2 $19.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}


function Product4() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 4"></img>
            <h3>Lipgloss $6.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}


function Product5() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 5"></img>
            <h3>Cool cup $9.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}


function Product6() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 6"></img>
            <h3>Lipstick $4.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}



function Product7() {
    return (
        <div className="product">
            <img src="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2" alt="Product 7"></img>
            <h3>Coke $3.99</h3>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}


export { Product1, Product2, Product3, Product4, Product5, Product6, Product7 };
