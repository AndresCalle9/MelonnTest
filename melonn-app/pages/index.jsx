import React from 'react'
import Link from "next/link"
import OrderCard from "../components/OrderCard/OrderCard"

export default function index() {
    return (
        <div>
            <h1>Sell Order List</h1>
            <Link href="/orders/newOrder">
            <a className="button"> New Order </a>
            </Link>
            <OrderCard />
        </div>
    )
}
