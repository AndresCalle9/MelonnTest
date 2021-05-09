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
//Function to get the time
const getDataTimeEpoch = (today) => {
  try {
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
const generateIntOrderNumber = (date) => {
  try {
    const epoch = getDataTimeEpoch(date);
    const random = getRandomArbitrary(0, 100);
    return "MSE" + epoch + random;
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to handle the wrong validation 
const handleWrongValidation = (orderData) => {
  try {
    orderData.packPromiseMin = null;
    orderData.packPromisaMax = null;
    orderData.shipPromiseMin = null;
    orderData.shipPromisaMax = null;
    orderData.deliveryPromiseMin = null;
    orderData.deliveryPromisaMax = null;
    orderData.readyPickupPromiseMin = null;
    orderData.readyPickupPromisaMax = null;
    return orderData
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
  const noBusinessDay = offDays.some((offDay) => date == offDay)
  return noBusinessDay
}
//Function to create next business day
const nextBusinesDays = async (offDays) => {
  try {
    let today = new Date();
    let nextBusinessDays = [];
    while (nextBusinessDays.length < 10) {
      const nextDayAux = new Date(today.setDate(today.getDate() + 1));
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
      orderWeight += (parseFloat(item.productWeight) * parseInt(item.productQty));
    })
    return orderWeight
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to validate the weight
const verifyWeight = (min, max, weight) => {
  try {
    let validated = true;
    if (min <= weight && weight <= max) {
      validated = true;
    } else {
      validated = false
    }
    return validated
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to validate day type
const verifyDayType = async (date, offDays, type) => {
  try {
    let validated = false;
    if (type == "ANY") {
      validated = true;
    }
    else if (type == "BUSINESS") {
      const day = getFormatDate(date)
      const offDay = await verifyBusinessDays(day, offDays)
      // console.log(offDay)
      if (offDay == false) {
        validated = true;
      } else {
        validated = false;
      }
    }
    return validated
  } catch (error) {
    return ({ message: error.message });
  }
}
//Function to validate the time of the day 
const verifyTumeOfDay = async (date, from, to) => {
  try {
    let validated = true;
    const hour = date.getHours();
    if (from <= hour && hour <= to) {
      validated = true;
    } else {
      validated = false
    }
    return validated
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
      let orderData = req.body;
      const rules = await getRules(orderData.shippingMethod);
      const offDays = await getOffDays();
      // const nowDataTime = new Date()
      const today = new Date(); // for sunday test
      const nowDataTime = new Date(today.setDate(today.getDate() + 1)); //for sunday tests
      orderData.creationDataTime = getFormatDate(nowDataTime);
      orderData.internalOrderNumber = generateIntOrderNumber(nowDataTime);
      orderData.nextBusinessDays = await nextBusinesDays(offDays);
      const orderWeight = calculateOrderWeight(orderData.items)
      const weightValidation = verifyWeight(rules.rules.availability.byWeight.min, rules.rules.availability.byWeight.max, orderWeight)
      if (weightValidation === true) {
        const dayTypeValidation = await verifyDayType(nowDataTime, offDays, rules.rules.availability.byRequestTime.dayType);
        if (dayTypeValidation === true) {
          const timeOfDay = await verifyTumeOfDay(nowDataTime, rules.rules.availability.byRequestTime.fromTimeOfDay, rules.rules.availability.byRequestTime.toTimeOfDay)
          // put this code in if(timeOfDay == true) when the hours are in the range
          console.log(rules.rules.promisesParameters)
          
          // if (timeOfDay == true) {

          // } else {
          //   orderData = handleWrongValidation(orderData);
          //   // res.send({ message: "time of day incorrecto" })
          // }
        } else {
          orderData = handleWrongValidation(orderData);
          // res.send({ message: "Hoy es fin de semana o festivo" })
        }
      } else {
        orderData = handleWrongValidation(orderData);
        // res.send({ message: "El peso de la orden esta fuera del rango" })
      }
      res.send({ orderData })
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
