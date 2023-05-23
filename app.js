import express from 'express'
import convertionsRoutes from './src/routes/convertions.routes.js'
import userRoutes from './src/routes/users.routes.js'


const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(convertionsRoutes);
app.use(userRoutes)
export default app