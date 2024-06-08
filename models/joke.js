'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {
    static associate(models) {
      // define association here
    }
  }
  Joke.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Joke',
  });
  return Joke;
};
