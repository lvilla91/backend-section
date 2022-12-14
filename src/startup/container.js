const { createContainer, asClass, asValue, asFunction } = require("awilix");
const Routes = require('../routes')
const config = require('../config')
const app = require('./index')

//Services
const { HomeService } = require('../services')

//Controllers
const { HomeController } = require('../controllers')

//Routes
const { HomeRoutes } = require('../routes/index.routes')

//Contenedor
const container = createContainer()

//Registro
container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})

module.exports = container