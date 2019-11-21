import AboutUsConstants from '../contants/about-us-constants';
import {client} from './index';

export function fetchContacts() {
    return {
        type: AboutUsConstants.FETCH_CONTACTS,
        payload: client.get(AboutUsConstants.URL_REQUEST_GET_CONTACTS)
    }
}
