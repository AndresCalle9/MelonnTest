import React from "react";
import fetchApi from "../../utils/fetchApi";
import Link from "next/link";
import ProductCard from "../../components/ProductCard/ProductCard";
import s from "../../styles/pages/Order.module.scss";

// Petición en el servidor para obtener los shipping-methods
export const getServerSideProps = async (ctx) => {
  try {
    console.log(ctx.params.id);
    const orderData = await fetchApi(`api/order/${ctx.params.id}`, "GET");
    if (!orderData) {
      return {
        statusCode: 503,
      };
    }
    const order = await orderData.json();
    return {
      props: {
        order,
        statusCode: 200,
      },
    };
  } catch (e) {
    ctx.statusCode = 503;
    return {
      props: {
        order: [],
        statusCode: 503,
      },
    };
  }
};

function order({ order }) {
  return (
    <div className={s.containerOrder}>
      <Link href="/">
        <a className="button">Back</a>
      </Link>
      <h1>Order Nº: {order.externalOrderNumber}</h1>
      <div className={s.section}>
        <h3>Orden information</h3>
        <p><b>External order number: </b>{order.externalOrderNumber}</p>
        <p><b>Buyer name: </b>{order.buyerFullName}</p>
        <p><b>Buyer phone: </b>{order.buyerPhoneNumber}</p>
        <p><b>Buyer email: </b>{order.buyerEmail}</p>
      </div>
      <div className={s.section}>
        <h3>Ship Info</h3>
        <p><b>Shipping address: </b>{order.shippingAddress}</p>
        <p><b>Shipping city: </b>{order.shippingCity}</p>
        <p><b>Shipping region: </b>{order.shippingRegion}</p>
        <p><b>Shipping country: </b>{order.shippingCountry}</p>
      </div>
      <div className={s.section}>
        <h3>Promise dates</h3>
        <p><b>Pack promise min: </b>{order.packPromiseMin}</p>
        <p><b>Pack promise max: </b>{order.packPromiseMax}</p>
        <p><b>Phip promise min: </b>{order.shipPromiseMin}</p>
        <p><b>Phip promise max: </b>{order.shipPromiseMax}</p>
        <p><b>Pelivery promise min: </b>{order.deliveryPromiseMin}</p>
        <p><b>Pelivery promise max: </b>{order.deliveryPromiseMax}</p>
        <p><b>Pickup promise min: </b>{order.pickUpPromiseMin}</p>
        <p><b>Pickup promise max: </b>{order.pickUpPromiseMax}</p>
      </div>
      <div className={s.section}>
        <h3>Line items</h3>
        {order.items.map((item) => {
          return <ProductCard item={item} key={item.productName} />;
        })}
      </div>
    </div>
  );
}

export default order;
