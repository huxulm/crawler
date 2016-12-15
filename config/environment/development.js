'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/funq_collects'
  },

  // Sequelize connection opions
  sequelize: {
    database: 'funq_collects',
    username: 'root',
    password: 'xlm1',	
    //uri: 'mysql://localhost:3306/snoopy-dev',
    options: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      dialectModulePath: null,
      logging: false,

      // only for sqlite	
      //storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
