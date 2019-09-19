import { sequelize } from ".";

const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 30]
      }
    }
  });

  User.associate = models => {
    User.hasMany(models.Product, { onDelete: "CASCADE" });
  };

  User.findByUsername = async username => {
    let user = await User.findOne({
      where: { username: username }
    });

    if (!user) {
      user = await User.findOne({
        where: { email: username }
      });
    }

    return user;
  };
  return User;
};

export default user;
