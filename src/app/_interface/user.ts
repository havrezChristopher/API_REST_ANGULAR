export interface IUser {
    idUser: number,
    lastName: string,
    firstName: string,
    emailUser: string,
    password: string,
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

