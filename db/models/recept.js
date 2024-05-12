const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Favorite, { foreignKey: 'recept_id' });
    }
  }
  Recept.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    time: DataTypes.STRING,
    ingredient: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recept',
  });
  return Recept;
};
