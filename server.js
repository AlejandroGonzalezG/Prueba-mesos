import {sequelize} from './src/database/database.js'
import app from './app.js'


const port = 3000
app.get('/', (req, res) => {
    res.send({
        message: "Prueba para Mesos"
    })
})

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(port, () => console.log(`app listening on port ${port}`))
    } catch (error) {
        console.error("Error al conectar", error)
        
    }
};

main();