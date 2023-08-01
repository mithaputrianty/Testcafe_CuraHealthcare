import {Selector, t} from 'testcafe'

class CuraHCLoginPage{
    constructor(){
        
        this.makeAppHome= Selector("#btn-make-appointment")
        this.chUsernameField= Selector('#txt-username')
        this.chPasswordField= Selector('#txt-password')
        this.chLoginBtn= Selector('#btn-login')
        this.chFacilityField= Selector('#combo_facility')
        this.errorMessageLogin= Selector("p").withText('Login failed! Please ensure the username and password are valid.')
    }

    async loginCURAHealthcarefromHomePage(username, password){
        await t
        .click(this.makeAppHome)
        .typeText(this.chUsernameField,username,{ paste: true, replace: true })
        .typeText(this.chPasswordField,password,{ paste: true, replace: true })
        .click(this.chLoginBtn)
    }

    async loginCURAHealthcare(username, password){
        await t
        .typeText(this.chUsernameField,username,{ paste: true, replace: true })
        .typeText(this.chPasswordField,password,{ paste: true, replace: true })
        .click(this.chLoginBtn)
    }
}

export default CuraHCLoginPage