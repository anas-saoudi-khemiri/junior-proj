const { user } = require("../../database/index");

module.exports = {
  getAllusers: async (req, res) => {
    try {
      const users = await user.findAll({});
      res.send(users);
    } catch (error) {
      throw error;
    }
  },
  deleteuser: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(401).send({ message: "id is not send" });
      }
      await user.destroy({
        where :{
         id: id 
    },
})
      res.send({ message: "user is deleted successfully" });
    } catch (error) {
      throw error;
    }
  },
//   toggleuser: async (req, res) => {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(401).send({ message: "id is not send" });
//       }
//       const oneuser = await user.findById(id);
//       if (!oneuser) {
//         return res
//           .status(401)
//           .send({ message: "user doesn't exist in database" });
//       }

//       const updated = await user.findOneAndUpdate(
//         { _id: id },
//         { completed: !oneuser.completed }
//       );
//       res.send({ message: "user upadated", updated: updated });
//     } catch (error) {
//       throw error;
//     }
//   },
  adduser: async (req, res) => {
    try {
      console.log("id inside addtod from verify token", req.user);
      const body= req.body;
      const newuser = await user.create(body);
      res.status(201).send({ message: "user is created successfully", newuser });
    } catch (error) {
      throw error;
    }
  },
  updateuser: async (req, res) => {
    try {
      const { name,password,email}  = req.body;
      const body  = req.body;
      if (!body ){
        res.status(401).send({ message: "body are  not send" });
      }
      const { id } = req.params;
      const updated = await user.update( { name,password,email} 
       ,
        {   where: { id: id }
           
        }
      );
      res.status(201).send({ message: "user is updated successfully", updated });
    } catch (error) {
      throw error;
    }
  },
  getoneusers: async (req, res) => {
    try {
      const { mail } = req.params;
      const users = await user.findOne({ where: { email: mail } });
      if (!users) {
        return res.status(401).send({ message: "email doesn't exist in database" });
      }
      res.send(users);
    } catch (error) {
      throw error;
    }
  },
  
  // register: async (req, res) => {
  //   try {
  //     const { email, name, password } = req.body;
  //     const existingUser = await User.findOne({ where: { email } });
  //     if (existingUser) {
  //       return res.status(400).send({ message: "User already exists" });
  //     }
  //     const hashePassword = await bcrypt.hash(password, 10);
  //     const newUser = await User.create({
  //       email,
  //       password: hashePassword,
  //       name,
  //     });
  //     return res
  //       .status(201)
  //       .send({ message: "register success", user: newUser });
  //   } catch (error) {}
  // },
  // login: async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await User.findOne({ where: { email } });
  //     if (!user) {
  //       return res
  //         .status(404)
  //         .send({ message: "email or password is incorrect" });
  //     }
  //     const comparePassword = await bcrypt.compare(password, user.password);
  //     if (!comparePassword) {
  //       return res
  //         .status(401)
  //         .send({ message: "email or password is incorrect" });
  //     }
  //     const token = jwt.sign({ id: user.id }, "1234", { expiresIn: "24h" });
  //     return res.status(201).send({ message: "Login success", user, token });
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  // currentUser: async (req, res) => {
  //   try {
  //     const user = await User.findOne({ id: req.user });
  //     res.send(user);
  //   } catch (error) {}
  // },
};