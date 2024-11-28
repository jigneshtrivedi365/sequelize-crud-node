const { Sequelize,DataTypes,Model } = require('sequelize');

const sequelize = new Sequelize('student_db', 'root', 'admin123', {
    host: 'localhost',
    logging:false,
    dialect:'mysql'
  });

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {}
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.student =  require('./student')(sequelize,DataTypes,Model);
db.employee = require('./employee')(sequelize,DataTypes,Model);
db.cource = require('./cource')(sequelize,DataTypes,Model);

db.cource.hasMany(db.student,{foreignKey: 'cource_id'});
db.student.belongsTo(db.cource,{foreignKey: 'cource_id'});

db.sequelize.sync({ force: false });
module.exports=db