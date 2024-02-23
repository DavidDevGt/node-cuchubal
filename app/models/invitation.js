'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invitation.init({
    group_id: DataTypes.INTEGER,
    invited_by_user_id: DataTypes.INTEGER,
    invitee_email: DataTypes.STRING,
    token: DataTypes.STRING,
    has_accepted: DataTypes.INTEGER,
    accepted_at: DataTypes.DATE,
    is_active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Invitation',
  });
  return Invitation;
};