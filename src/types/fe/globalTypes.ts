export type TestConfigType = {
    url: string
    apiEndpoint: string

    components: {
        authors: string
        authorsBookId: string
        coverPhotos: string
        coverPhotosBooksId: string
    }
}

export type TestSecretsType = {
    username: string,
    password: string
}
