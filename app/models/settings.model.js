module.exports = (sequelize, Sequelize) => {
    const Setting = sequelize.define("setting", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      humidity: {
        type: Sequelize.INTEGER
      },
      light: {
          type: Sequelize.STRING
      },
      uid: {
          type: Sequelize.INTEGER,
          foreignKey: true
      }
    });
  
    return Setting;
  };