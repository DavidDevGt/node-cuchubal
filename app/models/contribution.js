'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contribution.init({
    membership_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    contribution_date: DataTypes.DATE,
    is_confirmed: DataTypes.INTEGER,
    confirmation_date: DataTypes.DATE,
    is_active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contribution',
  });
  return Contribution;
};