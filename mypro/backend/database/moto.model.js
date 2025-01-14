module.exports = (connection, DataTypes) => {
    const moto = connection.define(
      "moto",
      {
        Image: {
            type: DataTypes.STRING(500),
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING(500),
          },
          categorie: {
            type: DataTypes.ENUM("Roadsters", "Routières", "sport","i dont know"),
            allowNull: false,
            defaultValue: "i dont know",
          },
          price: {
              type: DataTypes.STRING,
              allowNull: false,
  
            },
         available: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          },
      },
    );
    return moto;
  };
  