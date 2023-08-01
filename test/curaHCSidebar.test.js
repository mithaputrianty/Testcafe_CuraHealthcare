import MainData from '../page objects/components/MainData'
import CuraHCLoginPage from '../page objects/pages/CuraHCLoginPage'
import CuraHCMakeAppointmentPage from '../page objects/pages/CuraHCMakeAppointmentPage'
import CuraHCSidebarPage from '../page objects/pages/CuraHCSidebarPage'

const testData = new MainData()
const curaLoginPage = new CuraHCLoginPage()
const curaAppointmentPage = new CuraHCMakeAppointmentPage()
const curaSidebarPage = new CuraHCSidebarPage()

fixture `Access sidebar in CURA Healthcare`
.page `https://katalon-demo-cura.herokuapp.com/profile.php`
test.only('Access Home page from Sidebar',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    await t
    .expect(curaLoginPage.chFacilityField.visible).ok()
    .click(curaSidebarPage.sideBar)
    .click(curaSidebarPage.homeOnclick)
    .expect(curaLoginPage.makeAppHome.visible).ok()
})

test.only('Access History page from Sidebar',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    await t
    .expect(curaLoginPage.chFacilityField.visible).ok()
    .click(curaSidebarPage.sideBar)
    .click(curaSidebarPage.historyOnclick)
    .expect(curaSidebarPage.historyPage.visible).ok()
})

test.only('User logout from Sidebar',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    await t
    .expect(curaLoginPage.chFacilityField.visible).ok()
    .click(curaSidebarPage.sideBar)
    .click(curaSidebarPage.logoutOnclick)
    .expect(curaLoginPage.chLoginBtn.visible).notOk()
})

test.only('User logout from Profile page',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    await t
    .expect(curaLoginPage.chFacilityField.visible).ok()
    .click(curaSidebarPage.sideBar)
    .click(curaSidebarPage.profileOnclick)
    .click(curaSidebarPage.logoutBtnOnProfilePage)
    .expect(curaLoginPage.chLoginBtn.visible).notOk()
})