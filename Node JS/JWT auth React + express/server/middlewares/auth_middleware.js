import { ApiError } from "../exceptions/api_error.js"
import { tokenService } from "../services/token_service.js"

export function authMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData
        next()
    } catch (err) {
        return next(ApiError.UnauthorizedError())
    }
}