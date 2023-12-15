import ReviewsDAO from "../dao/reviewsDAO.js"

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try {
            const movieId = req.body.movieId
            const review = req.body.review
            const user = req.body.user

            const reviewResponse
        }
    } catch(e) {

    }
}