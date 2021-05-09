
module.exports = {
  getOrders: async (req, res) => {
    try {
      console.log("getOrders")
      res.send({message : "hola"})
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  createOrder: async (req, res) => {
    try {
      console.log("createOrder")
      res.send({message : "hola2"})
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
