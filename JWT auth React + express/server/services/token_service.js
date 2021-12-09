import jsonwebtoken from "jsonwebtoken"
import { tokenModel } from "../models/token_model.js"

class TokenService {
    generateTokens(payload) {
        const accessToken = jsonwebtoken.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: '30m'})
        const refreshToken = jsonwebtoken.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: '30d'})
        return { accessToken, refreshToken }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({ user: userId, refreshToken })
        return token
    }
}

export const tokenService = new TokenService()