const actionTypePrefix = "ABOUT_US_"
const urlRequestPrefix = "/api/contacts/"

export default {
    FETCH_CONTACTS: `${actionTypePrefix}FETCH_CONTACT`,
    FETCH_CONTACTS_FULFILLED: `${actionTypePrefix}FETCH_CONTACT_FULFILLED`,
    URL_REQUEST_GET_CONTACTS: `${urlRequestPrefix}getContactList`,
}
