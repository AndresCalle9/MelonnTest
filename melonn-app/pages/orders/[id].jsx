import React from 'react'
import fetchApi from "../../utils/fetchApi";
import Link from "next/link"

// Petición en el servidor para obtener los shipping-methods
export const getServerSideProps = async (ctx) => {
    try {
        console.log(ctx.params.id)
      const orderData = await fetchApi(`api/order/${ctx.params.id}`, "GET");
      if (!orderData) {
        return {
          statusCode: 503,
        };
      }
      const order = await orderData.json();
      console.log(order)
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

function order({order}) {
    return (
        <div>
      <Link href="/">
      <a className="button">
          Back
      </a>
      </Link>
      <h1>Order Nº</h1>
      <div>
        <h3>Orden information</h3>
        <p>External order number: {order.externalOrderNumber}</p>
        <p>buyer name: {order.buyerFullName}</p>
        <p>buyer phone: {order.buyerPhoneNumber}</p>
        <p>buyer email: {order.buyerEmail}</p>
      </div>
      <div>
        <h3>Ship Info</h3>
        <p>shipping address: {order.shippingAddress}</p>
        <p>shipping city: {order.shippingCity}</p>
        <p>shipping region: {order.shippingRegion}</p>
        <p>shipping country: {order.shippingCountry}</p>
      </div>
      <div>
        <h3>Promise dates</h3>
        <p>pack promise min: {order.packPromiseMin}</p>
        <p>pack promise max: {order.packPromiseMax}</p>
        <p>ship promise min: {order.shipPromiseMin}</p>
        <p>ship promise max: {order.shipPromiseMax}</p>
        <p>delivery promise min: {order.deliveryPromiseMin}</p>
        <p>delivery promise max: {order.deliveryPromiseMax}</p>
        <p>pickup promise min: {order.pickUpPromiseMin}</p>
        <p>pickup promise max: {order.pickUpPromiseMax}</p>
      </div>
      <div>
        <h3>Line items</h3>
        <p>Product name</p>
        <p>Produc quantity</p>
        <p>Product weight</p>
      </div>
    </div>
    )
}

export default order
