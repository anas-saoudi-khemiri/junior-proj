const { moto } = require("../../database/index");

module.exports = {
  getAllmotos: async (req, res) => {
    try {
      const motos = await moto.findAll({});
      res.send(motos);
    } catch (error) {
      throw error;
    }
  },
  deletemoto: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(401).send({ message: "id is not send" });
      }
      await moto.destroy({
        where :{
         id: id 
    },
})
      res.send({ message: "moto is deleted successfully" });
    } catch (error) {
      throw error;
    }
  },
  togglemoto: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(401).send({ message: "id is not send" });
      }
      const onemoto = await moto.findOne({ where: { id: id } });
      if (!onemoto) {
        return res
          .status(401)
          .send({ message: "moto doesn't exist in database" });
      }

      const updated = await moto.update({available: !onemoto.available },{where: { id: id }});
      res.send({ message: "moto upadated", updated: updated });
    } catch (error) {
      throw error;
    }
  },
  addmoto: async (req, res) => {
    try {
      console.log("id inside addtod from verify token", req.user);
      const body= req.body;
      const newmoto = await moto.create(body);
      res.status(201).send({ message: "moto is created successfully", newmoto });
    } catch (error) {
      throw error;
    }
  },
  updatemoto: async (req, res) => {
    try {
      const { Image, name,description,categorie,price,available }  = req.body;
      const body  = req.body;
      if (!body ){
        res
          .status(401)
          .send({ message: "body are  not send" });
      }
      const { id } = req.params;
      const updated = await moto.update( { Image, name,description,categorie,price,available } 
       ,
        {   where: { id: id }
           
        }
      );
      res.status(201).send({ message: "moto is updated successfully", updated });
    } catch (error) {
      throw error;
    }
  },
};
