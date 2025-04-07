export const loginSel = {
    LOGIN_FORM : 'a[id="login2"]',
    USERNAME_FIELD: 'input[id="loginusername"]',
    PASSWORD_FIELD: 'input[id="loginpassword"]',
    LOGIN_BUTTON: 'Log in',
    CLOSE_BUTTON: 'Close',
    LOGOUT: 'a[id="logout2"]'
}

export const signUpSel = {
    SIGNUP_FORM: 'a[id="signin2"]',
    USERNAME_FIELD: 'input[id="sign-username"]',
    PASSWORD_FIELD: 'input[type="password"]',
    SIGNUP_BUTTON: 'Sign up',
    CLOSE_BUTTON: 'Close'
}

export const homePageSel = {
    CATEGORY: {
      PHONES: `a[onclick="byCat('phone')"]`,
      LAPTOPS: `a[onclick="byCat('notebook')"]`,
      MONITORS: `a[onclick="byCat('monitor')"]`,
    },
  };

  export const contactSel = {
    CONTACT_FORM: 'Contact',
    EMAIL_FIELD: 'input[id="recipient-email"]',
    NAME_FIELD:'input[id="recipient-name"]',
    MESSAGE_FIELD: 'Message',
    SEND_BUTTON: 'Send message',
    CLOSE_BUTTON: 'Close'
}

export const cartOrderSel = {
    CART:'Cart',
    ADDTOCART_BUTTON: 'Add to cart',
    DELETE_BUTTON: 'Delete',
    PLACEORDER_BUTTON: 'button[data-target="#orderModal"]',
    NAME_FIELD: 'input[id="name"]',
    CREDITCARD_FIELD: 'input[id="card"]',
    PURCHASE_BUTTON: 'Purchase'
}

export const aboutUsSel = {
    ABOUTUS_MODAL:'About us',
    CLOSE_BUTTON:'Close'
}