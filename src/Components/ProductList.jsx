import React, { useEffect, useState } from "react";
import './productStyle.css';
import { connect } from "react-redux";
import { addToCart } from "../Redux/cart/actions";
import { fetchProducts } from "../api";

const ProductList = ({ addToCart, alert, setAlert }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error:", error);
        setAlert("An error occurred while fetching products.");
      }
    }
    fetchData();
  }, [setAlert]);

  return (
    <div className="container-fluid bg-dark text-white">
      {alert && <div className="alert">{alert}</div>}
      <h2 className="text-center pt-3">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-md-4 col-sm-6 col-lg-3 col-xl-3"
            key={product.id}
          >
            <div className="card my-4">
              <header>
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </header>
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-black fw-bold">
                  $ {product.price}
                </p>
              </div>
              <button
                onClick={() => addToCart(product)} // Use addToCart action
                type="button"
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products, // Map products from Redux state
  alert: state.alert,
});

const mapDispatchToProps = {
  addToCart, // Map addToCart action to props
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);