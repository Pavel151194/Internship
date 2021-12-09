import jsonwebtoken from "jsonwebtoken"
import { tokenModel } from "../models/token_model.js"

class TokenService {
    generateTokens(payload) {
        const accessToken = jsonwebtoken.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: '30m'})
        const refreshToken = jsonwebtoken.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: '30d'})
        return { accessToken, refreshToken }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY)
            return userData
        } catch (err) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY)
            return userData
        } catch (err) {
            return null
        }
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

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({ refreshToken })
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({ refreshToken })
        return tokenData
    }
}

export const tokenService = new TokenService()