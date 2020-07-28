const burger = require('./controllers/controller');

exports.route = (app) => {
    app.post("/burger-new", burger.createBurger);
    app.get("/burger-all", burger.getAllBurgers);
    app.put("/updateBurger", burger.updateBurger);
}
