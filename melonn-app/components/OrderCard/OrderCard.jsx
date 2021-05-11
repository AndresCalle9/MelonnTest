import React from "react";
import s from "./OrderCard.module.scss";
import Link from "next/link";

function OrderCard({data ,id, methods}) {
  const method = methods.find((method)=>method.id == data.shippingMethod)
  return (
    <div className={s.card}>
      <Link href={`/orders/${id}`}>
        <a>
          <p><b> Sell Order Number: </b>{data.externalOrderNumber}</p>
          <p><b>Seller Store: </b>{data.sellerStore}</p>
          <p><b>Creation Date: </b>{data.creationDataTime}</p>
          <p><b>Shipping method: </b>{method.name}</p>
        </a>
      </Link>
    </div>
  );
}

export default OrderCard;
