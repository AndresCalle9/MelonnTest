import React from "react";
import s from "./OrderCard.module.scss";
import Link from "next/link";

function OrderCard({data, key ,id}) {
  return (
    <div className={s.card}>
      <Link href={`/orders/${id}`}>
        <a>
          <p>Sell Order Number: {data.externalOrderNumber}</p>
          <p>Seller store: {data.sellerStore}</p>
          <p>Creation Date: {data.nowDataTime}</p>
          <p>Shipping method: {data.shippingMethod}</p>
        </a>
      </Link>
    </div>
  );
}

export default OrderCard;
