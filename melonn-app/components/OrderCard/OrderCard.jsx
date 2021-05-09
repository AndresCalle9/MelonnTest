import React from "react";
import s from "./OrderCard.module.scss";
import Link from "next/link";

function OrderCard() {
  return (
    <div className={s.card}>
      <Link href="/orders/temp">
        <a>
          <p>Sell Order Number</p>
          <p>Seller store</p>
          <p>Creation Date</p>
          <p>Shipping method</p>
        </a>
      </Link>
    </div>
  );
}

export default OrderCard;
