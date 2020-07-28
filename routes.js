const burger = require('./controllers/controller');

exports.route = (app) => {
    // app.post("/user", review.create);
    app.post("/burger-new", burger.createBurger);
    app.get("/burger-all", burger.getAllBurgers);
//     app.get("/review/:id", review.getReviewById);
//     app.delete("/user/:id", review.deleteUser);
//     app.delete("/review/:id", review.deleteReview);
//     app.put("/user/:id", review.updateUser);
//     app.put("/reviewUp", review.updateReview);
//     app.get("/login/:user_name/:email", review.login)
}
