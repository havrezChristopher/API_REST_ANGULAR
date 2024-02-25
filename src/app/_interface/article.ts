export interface IArticle {
    id: number,
    nom:string,
    description:string,
    prix:number,
    quantiter:number,
    stock:boolean,
    createdAt: string,
    updatedAt: string,
    deletedAt: null | string
}

export interface ISingleArticle {
    data: ISingleArticle
}

export interface IDataArticle {
    data: IDataArticle[]
}

