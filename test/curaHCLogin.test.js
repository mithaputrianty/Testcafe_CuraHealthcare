import MainData from '../page objects/components/MainData'
import CuraHCLoginPage from '../page objects/pages/CuraHCLoginPage'

const testData = new MainData()
const curaLoginPage = new CuraHCLoginPage()

fixture `Access CURA Healthcare`
.page `https://katalon-demo-cura.herokuapp.com/profile.php`
test.only('Login CURA Healthcare with valid data',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    await t.expect(curaLoginPage.chFacilityField.visible).ok()
})

.page `https://katalon-demo-cura.herokuapp.com/profile.php#login`
test.only('Login CURA Healthcare with valid data',async t=>{

    curaLoginPage.loginCURAHealthcare(testData.curaUsername, testData.curaPassword)
    await t.expect(curaLoginPage.chFacilityField.visible).ok()
})

test.only('Login CURA Healthcare with invalid username',async t=>{

    curaLoginPage.loginCURAHealthcare(testData.curaInvalidUsername, testData.curaPassword)
    await t.expect(curaLoginPage.errorMessageLogin.visible).ok()
})

test.only('Login CURA Healthcare with invalid password',async t=>{

    curaLoginPage.loginCURAHealthcare(testData.curaUsername, testData.curaInvalidPassword)
    await t.expect(curaLoginPage.errorMessageLogin.visible).ok()
})

test.only('Login CURA Healthcare with invalid username and password',async t=>{

    curaLoginPage.loginCURAHealthcare(testData.curaInvalidUsername, testData.curaInvalidPassword)
    await t.expect(curaLoginPage.errorMessageLogin.visible).ok()
})

test.only('Login CURA Healthcare by not filling username and password',async t=>{

    await t
    .click(curaLoginPage.chLoginBtn)
    .expect(curaLoginPage.errorMessageLogin.visible).ok()
})