export interface IUser {
    idUser: number,
    lastName: string,
    hashedPassword:string,
    firstName: string,
    emailUser: string,
    emailConfirmed:string,
    password: string,
    birthday:string,
    idPhoto:string,
    role:string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null | string
}

export interface ISingleUser {
    data: IUser
}

export interface IDataUser {
    data: IUser[]
}

export interface ITokenUser {
    idUser: number,
    nom: string,
    prenom: string,
    email: string,
    iap?: number,
    exp?: number
}

