module.exports = (sequelize,DataTypes,Model) => {
    class Student extends Model {}

    Student.init(
    {
        // Model attributes are defined here
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        roll_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    },
    {
        // Other model options go here
        timestamps: false,
        sequelize, // We need to pass the connection instance
        modelName: 'student', // We need to choose the model name
    },
    );

    // `sequelize.define` also returns the model
    console.log(Student === sequelize.models.Student); // true

    return Student;
}
// module.exports=Student;