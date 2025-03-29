export type testConfigType = {
    endpointUrl: string
    apiEndpointUrl: {
        users: string
        activities : string
        authors: string
        authorsBookId: string
        books: string
        coverPhotos: string
        coverPhotosBooksId: string
    }
}

export type testSecretsType = {
    username: string,
    password: string
}