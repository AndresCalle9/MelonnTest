import React from "react";

function temp() {
  return (
    <div>
      <a className = "button" href="javascript:history.go(-1)">Back</a>
      <h1>Order Nº</h1>

      <div>
        <h3>Orden information</h3>
        <p>External order number</p>
        <p>buyer name</p>
        <p>buyer phone</p>
        <p>buyer email</p>
      </div>
      <div>
        <h3>Ship Info</h3>
        <p>shipping address</p>
        <p>shipping city</p>
        <p>shipping region</p>
        <p>shipping country</p>
      </div>
      <div>
        <h3>Promise dates</h3>
        <p>pack promise min</p>
        <p>pack promise max</p>
        <p>ship promise min</p>
        <p>ship promise max</p>
        <p>delivery promise min</p>
        <p>delivery promise max</p>
        <p>pickup promise min</p>
        <p>pickup promise max</p>
      </div>
      <div>
        <h3>Line items</h3>
        <p>Product name</p>
        <p>Produc quantity</p>
        <p>Product weight</p>
      </div>
    </div>
  );
}

export default temp;
