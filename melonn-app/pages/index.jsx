import React from "react";
import Link from "next/link";
import OrderCard from "../components/OrderCard/OrderCard";
import fetchApi from "../utils/fetchApi";
import s from "../styles/pages/Order.module.scss";

// Ask to server for orders
export const getServerSideProps = async (ctx) => {
  try {
    const ordersData = await fetchApi("api/orders", "GET");
    const data = await fetch(
        "https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods",
        {
          method: "GET",
          headers: {
            "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT",
          },
        }
      );
    if (!ordersData || !data) {
      return {
        statusCode: 503,
      };
    }
    const orders = await ordersData.json();
    const methods = await data.json();

    return {
      props: {
        orders,
        methods,
        statusCode: 200,
      },
    };
  } catch (e) {
    ctx.statusCode = 503;
    return {
      props: {
        orders: [],
        methods: [],
        statusCode: 503,
      },
    };
  }
};

export default function index({ orders, statusCode,methods }) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <div className={s.container}>
      <h1>Sell Order List</h1>
      <Link href="/orders/newOrder">
        <a className="button"> New Order </a>
      </Link>
      <div className={s.cards_container}>
        {orders?.map((order) => {
          return <OrderCard data={order} key={order.internalOrderNumber} id={order.internalOrderNumber} methods={methods}/>;
        })}
      </div>
    </div>
  );
}
