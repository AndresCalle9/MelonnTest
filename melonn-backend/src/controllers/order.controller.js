const fetch = require('isomorphic-unfetch');

//Function to get the rules for calculate the promises
const getRules = async (methodId, req, res) => {
  try {
    const res = await fetch(
      `https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/${methodId}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT",
        },
      }
    );
    return (await res.json())
  } catch (error) {
    return res.json({ message: error.message });
  }
}

const getOffDays = async (req, res) => {
  try {
    const res = await fetch(
      "https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days",
      {
        method: "GET",
        headers: {
          "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT",
        },
      }
    );
    return (await res.json())
  } catch (error) {
    return res.json({ message: error.message });
  }
}

//Function to estimate the variable Now data time
const getNowDataTime = () => {
  try {
    const today = new Date();
    const res = getFormatDate(today)
    return (res)
  } catch (error) {
    return ({ message: error.message });
  }
};

//Function to get the time
const getDataTimeEpoch = () => {
  try {
    const today = new Date();
    const epoch = Date.UTC(today.getFullYear(), (today.getMonth() + 1), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds())
    return epoch;
  } catch (error) {
    return ({ message: error.message });
  }
};

//Function to generate a number beteewn 0 and 100
const getRandomArbitrary = (min, max) => {
  try {
    return Math.floor(Math.random() * (max - min)) + min;
  } catch (error) {
    return ({ message: error.message });
  }
}

// function to generate internal order number 
const generateIntOrderNumber = () => {
  try {
    const epoch = getDataTimeEpoch();
    const random = getRandomArbitrary(0, 100);
    return "MSE" + epoch + random;
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to formation tomorrow date
const getFormatDate = (date) => {
  if ((date.getMonth() + 1) < 10) {
    if ((date.getDate()) < 10) {
      return date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-" + "0" + date.getDate();
    } else {
      return date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-" + date.getDate();
    }
  } else {
    if ((date.getDate()) < 10) {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + "0" + date.getDate();
    } else {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
  }
}
//Function to verify if tomorrow is a business day
const verifyBusinessDays = async (date, offDays) => {
  const delay = offDays.some((offDay) => date == offDay)
  return delay
}
//Function to create next business day
const nextBusinesDays = async () => {
  try {
    let nextBusinessDays = [];
    let date = new Date();
    const offDays = await getOffDays();
    while (nextBusinessDays.length < 10) {
      const nextDayAux = new Date(date.setDate(date.getDate() + 1));
      const nextDay = getFormatDate(nextDayAux);
      const delay = await verifyBusinessDays(nextDay, offDays)
      if (delay == false) {
        nextBusinessDays.push(nextDay)
      }
    }
    return nextBusinessDays
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to calculate the weight of the list itmes in the order
const calculateOrderWeight = (items) => {
  try {

    let orderWeight = 0
    items.forEach(item => {
      orderWeight += (parseFloat(item.productWeight)*parseInt(item.productQty));
    })
    return orderWeight
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to validate the weight
const verifyWeight = (min, max, weight) => {
  try {
    let validate = true;
    if (min <= weight && weight <= max) {
      validate = true;
    } else {
      validate = false
    }
    return validate
  } catch (error) {
    return ({ message: error.message });
  }
}
module.exports = {
  //Module to get all the orders available
  getOrders: async (req, res) => {
    try {
      console.log("getOrders")
      res.send({ message: "hola" })
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  //Module to create a new order
  createOrder: async (req, res) => {
    try {
      const orderData = req.body;
      const rules = await getRules(orderData.shippingMethod);
      orderData.creationDataTime = getNowDataTime();
      orderData.internalOrderNumber = generateIntOrderNumber();
      const nextBusinessDays = await nextBusinesDays();
      const orderWeight = calculateOrderWeight(orderData.items)
      const weightValidation = verifyWeight(rules.rules.availability.byWeight.min, rules.rules.availability.byWeight.max, orderWeight)
      console.log(rules.rules)
      if (weightValidation == true) {
        // if{

        // }else {
        //   res.send({ message: "alguna otra validación" })
        // }
      } else {
        orderData.packPromiseMin = null;
        orderData.packPromisaMax = null;
        orderData.shipPromiseMin = null;
        orderData.shipPromisaMax = null;
        orderData.deliveryPromiseMin = null;
        orderData.deliveryPromisaMax = null;
        orderData.readyPickupPromiseMin = null;
        orderData.readyPickupPromisaMax = null;
        res.send({ message: "El peso de la orden esta fuera del rango" })
      }
      res.send({ orderData })
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
