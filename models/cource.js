module.exports = (sequelize,DataTypes,Model) => {
    class Cource extends Model {}
    Cource.init(
        {
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                get() {
                    const rawValue = this.getDataValue('name');
                    return rawValue ? rawValue.toUpperCase() : null;
                }
            },
            fees: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
            sequelize,
            modelName: 'cource',
        }
    );
    return Cource;
}