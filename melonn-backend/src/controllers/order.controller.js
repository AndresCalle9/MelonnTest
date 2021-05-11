const { response } = require('express');
const store = require('store2')

const { getRules, getOffDays, generateIntOrderNumber, handleWrongValidation, getFormatDate, nextBusinesDays, calculateOrderWeight, verifyWeight, verifyDayType, verifyTimeOfDay, getPromiseParams, caseIterator, calculatePromiseMin, calculatePromiseMax } = require("../utils/functions.js")

module.exports = {
  //Module to get all the orders available
  getOrders: async (req, res) => {
    try {
      const orders = store.getAll();
      if (orders.data) {
        return res.status(200).json(orders.data);
      } else {
        return res.status(200).json([]);
      }
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  //Module to get and specific order
  getOrder: async (req, res) => {
    try {
      const { key } = req.params;
      const orders = store.getAll();
      const order = orders.data.find((order) => order.internalOrderNumber == key)
      return res.status(200).json(order);
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
      const nowDataTime = new Date()
      orderData.creationDataTime = getFormatDate(nowDataTime);
      orderData.internalOrderNumber = generateIntOrderNumber(nowDataTime);
      orderData.nextBusinessDays = await nextBusinesDays(offDays);
      const orderWeight = calculateOrderWeight(orderData.items)
      const weightValidation = verifyWeight(rules.rules.availability.byWeight.min, rules.rules.availability.byWeight.max, orderWeight)
      if (weightValidation === true) {
        const dayTypeValidation = await verifyDayType(nowDataTime, offDays, rules.rules.availability.byRequestTime.dayType);
        if (dayTypeValidation === true) {
          const timeOfDay = await verifyTimeOfDay(nowDataTime, rules.rules.availability.byRequestTime.fromTimeOfDay, rules.rules.availability.byRequestTime.toTimeOfDay)
          if (timeOfDay == true) {
            let priority = 1;
            workingCase = await caseIterator(priority, nowDataTime, rules, offDays)
            // Calculate pack promise
            const packPromiseParams = getPromiseParams(workingCase.packPromise); //Get pack promise params
            orderData.packPromiseMin = calculatePromiseMin(nowDataTime, packPromiseParams.minType, packPromiseParams.minDeltaHours, orderData.nextBusinessDays, packPromiseParams.minDeltaBusiness, packPromiseParams.minTimeOfDay);
            orderData.packPromiseMax = calculatePromiseMax(nowDataTime, packPromiseParams.maxType, packPromiseParams.maxDeltaHours, orderData.nextBusinessDays, packPromiseParams.maxDeltaBusiness, packPromiseParams.maxTimeOfDay);
            const shipPromiseParams = getPromiseParams(workingCase.shipPromise); //Get ship promise params
            orderData.shipPromiseMin = calculatePromiseMin(nowDataTime, shipPromiseParams.minType, shipPromiseParams.minDeltaHours, orderData.nextBusinessDays, shipPromiseParams.minDeltaBusiness, shipPromiseParams.minTimeOfDay);
            orderData.shipPromiseMax = calculatePromiseMax(nowDataTime, shipPromiseParams.maxType, shipPromiseParams.maxDeltaHours, orderData.nextBusinessDays, shipPromiseParams.maxDeltaBusiness, shipPromiseParams.maxTimeOfDay);
            const deliveryPromiseParams = getPromiseParams(workingCase.deliveryPromise); //Get delivery promise params
            orderData.deliveryPromiseMin = calculatePromiseMin(nowDataTime, deliveryPromiseParams.minType, deliveryPromiseParams.minDeltaHours, orderData.nextBusinessDays, deliveryPromiseParams.minDeltaBusiness, deliveryPromiseParams.minTimeOfDay);
            orderData.deliveryPromiseMax = calculatePromiseMax(nowDataTime, deliveryPromiseParams.maxType, deliveryPromiseParams.maxDeltaHours, orderData.nextBusinessDays, deliveryPromiseParams.maxDeltaBusiness, deliveryPromiseParams.maxTimeOfDay);
            const readyPickUpPromiseParams = getPromiseParams(workingCase.readyPickUpPromise); //Get ready pick up promise params
            orderData.readyPickUpPromiseMin = calculatePromiseMin(nowDataTime, readyPickUpPromiseParams.minType, readyPickUpPromiseParams.minDeltaHours, orderData.nextBusinessDays, readyPickUpPromiseParams.minDeltaBusiness, readyPickUpPromiseParams.minTimeOfDay);
            orderData.readyPickUpPromiseMax = calculatePromiseMax(nowDataTime, readyPickUpPromiseParams.maxType, readyPickUpPromiseParams.maxDeltaHours, orderData.nextBusinessDays, readyPickUpPromiseParams.maxDeltaBusiness, readyPickUpPromiseParams.maxTimeOfDay);
          } else {
            orderData = handleWrongValidation(orderData);
            // res.send({ message: "Time of day incorrecto" })
          }
        } else {
          orderData = handleWrongValidation(orderData);
          // res.send({ message: "Non a business day" })
        }
      } else {
        orderData = handleWrongValidation(orderData);
        // res.send({ message: "The weight is out of range" })
      }
      const oldOrders = store.getAll();
      const { data } = oldOrders;
      if (data) {
        let ordersArr = [...data];
        ordersArr.push(orderData);
        store("data", ordersArr);
      } else {
        store("data", [orderData]);
      }

      return res.status(200).json(orderData);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
