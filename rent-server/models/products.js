import { Sequelize } from "sequelize";

const products = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    productName: {
      type: DataTypes.STRING
    },
    rent: {
      type: DataTypes.INTEGER
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });

  Product.associate = models => {
    Product.belongsTo(models.User);
  };

  return Product;
};

export default products;
