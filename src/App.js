import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "iPhone 14 Pro",
          qty: 1,
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-14-pro-202209?wid=366&hei=508&fmt=jpeg&qlt=90&.v=1661471046256",
          id: 1,
        },
        {
          price: 1199,
          title: "Macbook Air M2",
          qty: 1,
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303732",
          id: 2,
        },
        {
          price: 399,
          title: "Watch Watch Ultra",
          qty: 1,
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1660927563656",
          id: 3,
        },
        {
          price: 279,
          title: "Airpods Pro",
          qty: 1,
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
          id: 4,
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty =
      products[index].qty === 0 ? 0 : products[index].qty - 1;
    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = () =>{
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
        return (cartTotal = cartTotal + product.qty * product.price);
    });
    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div className="header-container">
        <h2>Subtotal ({this.getCartCount()} items): {this.getCartTotal()}$</h2>
        </div>
      </div>
    );
  }
}

export default App;
