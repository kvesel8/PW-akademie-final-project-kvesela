export type User = {

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