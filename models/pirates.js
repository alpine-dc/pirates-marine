'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pirates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Pirates.belongsTo(models.Ships, { foreignKey: 'shipId' })
    }
  };
  Pirates.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Name must be perfect'"
        }
      }
    },
    status: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Must the right status'"
        }
      }
    },
    type: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Please choose a type'"
        }
      }
    },
    shipId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Pirates',
  });
  return Pirates;
};