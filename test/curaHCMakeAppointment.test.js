import MainData from '../page objects/components/MainData'
import CuraHCLoginPage from '../page objects/pages/CuraHCLoginPage'
import CuraHCMakeAppointmentPage from '../page objects/pages/CuraHCMakeAppointmentPage'

const testData = new MainData()
const curaLoginPage = new CuraHCLoginPage()
const curaAppointmentPage = new CuraHCMakeAppointmentPage()

fixture `Make Appointmenet in CURA Healthcare`
.page `https://katalon-demo-cura.herokuapp.com/profile.php`
test.only('Create an appointment by filling all field',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    curaAppointmentPage.makeAppointmentAllField('Seoul CURA Healthcare Center', 'None', '08/08/2023', 'ini adalah comment')
    await t.expect(curaAppointmentPage.chAppConfirm.visible).ok()
})

test.only('Create an appointment by filling mandatory field only',async t=>{

    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    curaAppointmentPage.makeAppointmentMandatoryField('Hongkong CURA Healthcare Center', 'Medicaid', '08/08/2023')
    await t.expect(curaAppointmentPage.chAppConfirm.visible).ok()
})

test.only('Create an appointment by filling Visit Date field with alphabet',async t=>{

    const alphabet = 'fixing'
    curaLoginPage.loginCURAHealthcarefromHomePage(testData.curaUsername, testData.curaPassword)
    curaAppointmentPage.makeAppointmentVisitdateUsingAlphabet('Hongkong CURA Healthcare Center', 'Medicaid', alphabet)
    await t
    //ini masih ambigu apakah benar atau tidak
    .expect(alphabet.visible).notOk()
})