export type TestConfigType = {
    url: string
    apiEndpoint: string

    components: {
        activities : string
        authors: string
        authorsBookId: string
        books: string
        coverPhotos: string
        coverPhotosBooksId: string
    }
}

export type TestSecretsType = {
    username: string,
    password: string
}
