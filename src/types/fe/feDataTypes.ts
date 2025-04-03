export type UserType = {
   validUsername_validPassword: {
        username: string
        password: string
     },
     
     invalidUserName_validPassword: {
        username: string
        password: string
     },
     
     invalidPassword_valid_username: {
        username: string
        password: string
     }   
}

export type PlaceOrderFormType = {
   name: string
   creditcard: number
}

export type ContactDataType = {
   contactEmail: string
   contactName: string
   message: string
}