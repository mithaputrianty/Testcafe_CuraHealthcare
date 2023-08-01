import {Selector, t} from 'testcafe'

class CuraHCMakeAppointmentPage{
    constructor(){
        
        this.chFacilityField= Selector('#combo_facility')
        //this.chFacilityField= Selector("select").withAttribute('name', 'facility')
        this.chFacilityOption= this.chFacilityField.find('option')
        this.chHospitalReadmissionCheckbox= Selector('#chk_hospotal_readmission')
        this.chHealthcareProgram= Selector("div").find('label')
        //this.chMedicareHealthcareProgram= Selector('#radio_program_medicare')
        //this.chMedicaidHealthcareProgram= Selector('#radio_program_medicaid')
        //this.chNoneHealthcareProgram= Selector('#radio_program_none')
        this.chVisitDateField= Selector('#txt_visit_date')
        this.chCommentField= Selector('#txt_comment')
        this.chBookAppointmentBtn= Selector('#btn-book-appointment')
        this.chAppConfirm= Selector("h2").withText('Appointment Confirmation')
    }

    async makeAppointmentAllField(optionFacility, healthcareProgram, visitDate, comment){
        await t
        .click(this.chFacilityField)
        .click(this.chFacilityOption.withText(optionFacility))
        .click(this.chHospitalReadmissionCheckbox)
        .click(this.chHealthcareProgram.withText(healthcareProgram))
        .typeText(this.chVisitDateField,visitDate,{ paste: true, replace: true })
        .typeText(this.chCommentField,comment,{ paste: true, replace: true })
        .click(this.chBookAppointmentBtn)
    }

    async makeAppointmentMandatoryField(optionFacility, healthcareProgram, visitDate){
        await t
        .click(this.chFacilityField)
        .click(this.chFacilityOption.withText(optionFacility))
        .click(this.chHealthcareProgram.withText(healthcareProgram))
        .typeText(this.chVisitDateField,visitDate,{ paste: true, replace: true })
        .click(this.chBookAppointmentBtn)
    }

    async makeAppointmentVisitdateUsingAlphabet(optionFacility, healthcareProgram, visitDate){
        await t
        .click(this.chFacilityField)
        .click(this.chFacilityOption.withText(optionFacility))
        .click(this.chHealthcareProgram.withText(healthcareProgram))
        .typeText(this.chVisitDateField,visitDate,{ paste: true, replace: true })

    }
}

export default CuraHCMakeAppointmentPage