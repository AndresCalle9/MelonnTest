import React from "react";
import Link from "next/link";
import OrderCard from "../components/OrderCard/OrderCard";
import fetchApi from "../utils/fetchApi";
import s from "../styles/pages/Order.module.scss";

// Petición en el servidor para obtener los shipping-methods
export const getServerSideProps = async (ctx) => {
  try {
    const ordersData = await fetchApi("api/orders", "GET");
    if (!ordersData) {
      return {
        statusCode: 503,
      };
    }
    const orders = await ordersData.json();
    return {
      props: {
        orders,
        statusCode: 200,
      },
    };
  } catch (e) {
    ctx.statusCode = 503;
    return {
      props: {
        orders: [],
        statusCode: 503,
      },
    };
  }
};

export default function index({ orders, statusCode }) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <div>
      <h1>Sell Order List</h1>
      <Link href="/orders/newOrder">
        <a className="button"> New Order </a>
      </Link>
      <div className={s.cards_container}>
        {orders.map((order) => {
          return <OrderCard data={order} key={order.internalOrderNumber} id={order.internalOrderNumber}/>;
        })}
      </div>
    </div>
  );
}
