module.exports = (sequelize,DataTypes,Model) => {
    class Employee extends Model {}
    Employee.init(
    {
        // Model attributes are defined here
        first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        last_name: {
        type: DataTypes.STRING,
        },
        code: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        join_date: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    },
    {
        // Other model options go here
        timestamps: false,
        sequelize, // We need to pass the connection instance
        modelName: 'employee', // We need to choose the model name
    },
    );
      
      // `sequelize.define` also returns the model
    console.log(Employee === sequelize.models.Employee);
    return Employee;
}




// module.exports = Employee;