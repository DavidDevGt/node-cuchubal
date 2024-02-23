'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupSetting.init({
    group_id: DataTypes.INTEGER,
    duration_months: DataTypes.INTEGER,
    total_amount: DataTypes.DECIMAL,
    members_count: DataTypes.INTEGER,
    allow_half_hand: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupSetting',
  });
  return GroupSetting;
};