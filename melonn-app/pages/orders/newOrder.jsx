import React, { useState } from "react";
import s from "../../styles/pages/Order.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import fetchApi from "../../utils/fetchApi";
import { useRouter } from "next/router";
import swal from "@sweetalert/with-react";

// Ask to melonn API for shipping methods
export const getServerSideProps = async (ctx) => {
  try {
    const data = await fetch(
      "https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods",
      {
        method: "GET",
        headers: {
          "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT",
        },
      }
    );

    if (!data) {
      return {
        statusCode: 503,
      };
    }
    const methods = await data.json();
    return {
      props: {
        methods,
        statusCode: 200,
      },
    };
  } catch (e) {
    ctx.statusCode = 503;
    return {
      props: {
        methods: [],
        statusCode: 503,
      },
    };
  }
};

function newOrder({ methods, statusCode }) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  const router = useRouter();
  // Creation of hook to magnament the order information
  const [order, setOrder] = useState({
    sellerStore: "",
    shippingMethod: 1, //shipping method by default
    externalOrderNumber: "",
    buyerFullName: "",
    buyerPhoneNumber: "",
    buyerEmail: "",
    shippingAddress: "",
    shippingCity: "",
    shippingRegion: "",
    shippingCountry: "",
    items: [],
  });
  const [productFlag, setProductFlag] = useState(false);

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    if (order.items.length == 0) {
      const carEmpty = await swal({
        title: "Product list is empty!!",
        text: "Do you want to create an empty order?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (carEmpty) {
        const res = await fetchApi("api/orders", "POST", order);
        router.push("/");
      }
    } else {
      const res = await fetchApi("api/orders", "POST", order);
      router.push("/");
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (!productName.value || !productQty.value || !productWeight.value) {
      await swal({
        title: "A product field is empty!!",
        text: "Please review the product information",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    } else {
      const item = {
        productName: productName.value,
        productQty: productQty.value,
        productWeight: productWeight.value,
      };
      const auxItemsArr = [...order.items];
      auxItemsArr.push(item);
      setOrder({
        ...order,
        items: auxItemsArr,
      });
      setProductFlag(!productFlag);
    }
  };

  const deleteProducts = () => {
    const items = [];
    setOrder({
      ...order,
      items: items,
    });
  };

  return (
    <div className={s.container}>
      <h1>New order</h1>
      <form className={s.formNewOrder} onSubmit={sendOrder}>
        <div className={s.subcontainer}>
          <label htmlFor="sellerStore">
            <b>Seller Store: </b>
          </label>
          <input
            id="sellerStore"
            name="sellerStore"
            type="text"
            onChange={handleChange}
            required
          />
          <label htmlFor="shippingMethod">
            <b>Shipping Method: </b>
          </label>
          <select
            type="number"
            id="shippingMethod"
            name="shippingMethod"
            onChange={handleChange}
            required
          >
            {methods.map((method, index) => {
              return (
                <option key={index} value={method.id}>
                  {method.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="externalOrderNumber">
            <b>External user number: </b>
          </label>
          <input
            id="externalOrderNumber"
            name="externalOrderNumber"
            type="number"
            onChange={handleChange}
            required
          />
          <label htmlFor="buyerFullName">
            <b>Buyer name: </b>
          </label>
          <input
            id="buyerFullName"
            name="buyerFullName"
            type="text"
            onChange={handleChange}
            required
          />
          <label htmlFor="buyerPhoneNumber">
            <b>Buyer phone number: </b>
          </label>
          <input
            id="buyerPhoneNumber"
            name="buyerPhoneNumber"
            type="number"
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.subcontainer}>
          <label htmlFor="buyerEmail">
            <b>Buyer email: </b>
          </label>
          <input
            id="buyerEmail"
            name="buyerEmail"
            type="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="shippingAddress">
            <b>shipping address: </b>
          </label>
          <input
            id="shippingAddress"
            name="shippingAddress"
            type="text"
            onChange={handleChange}
            required
          />
          <label htmlFor="shippingCity">
            <b>Shipping city: </b>
          </label>
          <input
            id="shippingCity"
            name="shippingCity"
            type="text"
            onChange={handleChange}
            required
          />
          <label htmlFor="shippingRegion">
            <b>Shippin region: </b>
          </label>
          <input
            id="shippingRegion"
            name="shippingRegion"
            type="text"
            onChange={handleChange}
            required
          />
          <label htmlFor="shippingCountry">
            <b>Shipping country: </b>
          </label>
          <input
            id="shippingCountry"
            name="shippingCountry"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.productsContainer}>
          {order.items.map((item) => {
            return <ProductCard item={item} key={item.productName} />;
          })}
          <div className={s.productsContainerButtons}>
            <a className="button" onClick={() => setProductFlag(!productFlag)}>
              Add product
            </a>
            {order.items.length > 0 && (
              <a className="button" onClick={deleteProducts}>
                Delete products
              </a>
            )}
          </div>
          {productFlag && (
            <div className={s.productForm}>
              <label htmlFor="productName">
                <b>Nombre del producto:</b>
              </label>
              <input type="text" name="productName" id="productName" />
              <label htmlFor="productQty">
                <b>Cantidad:</b>
              </label>
              <input type="number" name="productQty" id="productQty" />
              <label htmlFor="productWeight">
                <b>Peso (Kg):</b>
              </label>
              <input type="number" name="productWeight" id="productWeight" />
              <button className="button" onClick={addProduct}>
                Save product
              </button>
            </div>
          )}
        </div>
        <button className="button" type="submit">
          Place order
        </button>
      </form>
    </div>
  );
}

export default newOrder;
