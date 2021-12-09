import { ApiError } from "../exceptions/api_error.js"

export const authMiddleware = (req, res, next) => {
    try {

    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}