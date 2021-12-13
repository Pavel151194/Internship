export class UserDto {
    constructor(model) {
        //console.log(`model ${model}`)

        this.email = model.email
        this.id = model._id
        this.isActivated = model.isActivated
    }
}