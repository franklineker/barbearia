const express = require('express')
const consign = require('consign')
const cors = require('cors')
const morgan = require('morgan')
const swaggerUI = require('swagger-ui-express')
const swaggerJSDocs = require('swagger-jsdoc')
const options = require('./src/config/openapi.json')

const swaggerSpec = swaggerJSDocs(options)

const app = express()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


consign()
    .include('./src/config/db.json')
    .then('./src/api')
    .then('./src/config/openapi.json')
    .then('./src/config/routes.js')
    .into(app)


app.listen(3000, () => console.log('Server is runnning on port 3000'))
