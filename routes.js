const review = require('./controllers/controller');

exports.route = (app) => {
    // app.post("/user", review.create);
    app.post("/burger-new", review.createBurger);
//     app.get("/user/:id", review.getUserById);
//     app.get("/review/:id", review.getReviewById);
//     app.delete("/user/:id", review.deleteUser);
//     app.delete("/review/:id", review.deleteReview);
//     app.put("/user/:id", review.updateUser);
//     app.put("/reviewUp", review.updateReview);
//     app.get("/login/:user_name/:email", review.login)
}
