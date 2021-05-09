import React, { useState } from "react";
import s from "../../styles/pages/Order.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import fetchApi from "../../utils/fetchApi"

// Petición en el servidor para obtener los shipping-methods
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
  // Creación de hook para control de parámetros de la orden nueva
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

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    const res = await fetchApi("api/orders","POST",order)
    console.log(await res.json())
  };

  const addProduct = (e) => {
    e.preventDefault();
    const item = {
      productName: productName.value,
      productQty: productQty.value,
      productWeight: productWeight.value,
    };
    const auxItemsArr = [...order.items]; // asignar valores y no indices
    auxItemsArr.push(item);
    setOrder({
      ...order,
      items: auxItemsArr,
    });
  };

  return (
    <div className={s.container}>
      <h1>Nueva orden</h1>
      <form className={s.formNewOrder} onSubmit={sendOrder}>
        <label htmlFor="sellerStore"> Seller Store: </label>
        <input
          id="sellerStore"
          name="sellerStore"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="shippingMethod"> Shipping Method: </label>
        <select
          type="number"
          id="shippingMethod"
          name="shippingMethod"
          onChange={handleChange}
        >
          {methods.map((method, index) => {
            return (
              <option key={index} value={method.id}>
                {method.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="externalOrderNumber"> External user number: </label>
        <input
          id="externalOrderNumber"
          name="externalOrderNumber"
          type="number"
          onChange={handleChange}
        />
        <label htmlFor="buyerFullName"> Buyer name: </label>
        <input
          id="buyerFullName"
          name="buyerFullName"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="buyerPhoneNumber"> Buyer phone number: </label>
        <input
          id="buyerPhoneNumber"
          name="buyerPhoneNumber"
          type="number"
          onChange={handleChange}
        />
        <label htmlFor="buyerEmail"> Buyer email: </label>
        <input
          id="buyerEmail"
          name="buyerEmail"
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="shippingAddress"> shipping address: </label>
        <input
          id="shippingAddress"
          name="shippingAddress"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="shippingCity"> Shipping city: </label>
        <input
          id="shippingCity"
          name="shippingCity"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="shippingRegion"> Shippin region: </label>
        <input
          id="shippingRegion"
          name="shippingRegion"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="shippingCountry"> Shipping country: </label>
        <input
          id="shippingCountry"
          name="shippingCountry"
          type="text"
          onChange={handleChange}
        />
        {order.items.map((item) => {
          return <ProductCard item={item} key={item.productName}/>;
        })}
        <div className={s.productForm}>
          <label htmlFor="">Nombre del producto:</label>
          <input type="text" name="productName" id="productName" />
          <label htmlFor="">Cantidad:</label>
          <input type="text" name="productQty" id="productQty" />
          <label htmlFor="">Peso:</label>
          <input type="text" name="productWeight" id="productWeight" />
          <button className="button" onClick={addProduct}>
            Guardar producto
          </button>
        </div>
        <button className="button" type="submit">
          Crear orden
        </button>
      </form>
    </div>
  );
}

export default newOrder;
