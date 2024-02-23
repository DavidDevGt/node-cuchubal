'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupTurn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupTurn.init({
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    turn_month: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    is_half_hand: DataTypes.INTEGER,
    partner_user_id: DataTypes.INTEGER,
    has_received: DataTypes.INTEGER,
    receive_date: DataTypes.DATE,
    is_active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupTurn',
  });
  return GroupTurn;
};