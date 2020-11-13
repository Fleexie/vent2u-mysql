module.exports = (sequelize, Sequelize) => {
    const Register = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username:{
        type: Sequelize.STRING,
        required: true
      },
      password:{
        type: Sequelize.STRING,
        required: true
      }
    },
    {
      timestamps: false
   }
   );
  
    return Register;
  };
