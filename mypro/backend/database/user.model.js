module.exports = (connection, DataTypes) => {
    const user = connection.define(
      "user",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
    );
    return user;
  };
  