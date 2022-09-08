import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.db.collection("products").onSnapshot((snapshot) => {
      //? onSnapshot will be executed again if we change the details/snapshot in firebase
      snapshot.docs.map((data) => {
        return 0;
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({
        products,
        loading: false,
      });
    });
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products,
    // });
    const reference = this.db.collection("products").doc(products[index].id);
    reference
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Updated the data Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const reference = this.db.collection("products").doc(products[index].id);
    reference.update({
      qty: products[index].qty === 0 ? 0 : products[index].qty - 1,
    })
    .then(()=>{return;})
    .catch((err) => {
      console.log(err);
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      return (cartTotal = cartTotal + product.qty * product.price);
    });
    return cartTotal;
  };
  addMacbookProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303732",
          price: 1199,
          qty: 0,
          title: "Macbook Air M3",
      })
      .then((reference) => {
        console.log("Product Added");
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && (
          <div className="loading">
            <h1>Hold on! Loding the Products...</h1>
          </div>
        )}
        <div className="header-container">
          <h2>
            Subtotal ({this.getCartCount()} items): {this.getCartTotal()}$
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
