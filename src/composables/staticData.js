import { ref } from 'vue';
import { reactive } from 'vue'
const Services = ref([
    { Name: "Accounting", route: '/Accounting' },
    { Name: "Business Registration Services", route: '/BusinessRegistration' },
    { Name: "OPR (Registration)", route: '/OPR' },
    { Name: "Taxation", route: '/Taxation' },
    { Name: "Post-Incorporation Services", route: '/postIncorporationSevices' }

]);


const BasicInfoFormData = ref({
    firstName: '',
    middleName: '',
    lastName: '',
    occupation: '',
    accountType: 0,
    nationalityAtBirth: '',
    currentNationality: '',
    birthCertificatePin: 0,
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    mobileNumber: ' ',
    email: '',
    usualAddress: {
        buildingName: '',
        streetName: '',
        areaName: '',
        city: '',
        postalCode: '',
        Country: ''
    },
    mailingAddress: {
        buildingName: '',
        streetName: '',
        areaName: '',
        city: '',
        postalCode: '',
        Country: ''
    }
})

export { Services, BasicInfoFormData }