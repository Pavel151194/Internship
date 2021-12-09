import bcrypt from "bcrypt"
import { v4 } from "uuid"
import { UserModel } from "../models/user_model.js"
import { mailService } from "./mail_service.js"
import { tokenService } from "./token_service.js"
import { UserDto } from "../dtos/user_dto.js"
import { ApiError } from "../exceptions/api_error.js"

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = v4()

        const user = await UserModel.create({ email, password: hashPassword, activationLink })
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink })
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }
}

export const userService = new UserService()