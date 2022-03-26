import axios from 'axios';

const Axios = axios.create();

const BACKEND_URL = 'http...'

const END_POINTS = {
    GENERAL_DATA: `${BACKEND_URL}/generalData`,
    FIRST_WEEK: `${BACKEND_URL}/firstWeek`
}
const getBlaBlaData = (params) => {
    return [
        {
            name: 'avi',
            age: 9,
            job: 'otomazia ve bakara'
        },
        {
            name: 'tim',
            age: 10,
            job: 'na ve bakara'
        },
        {
            name: 'ass',
            age: 100,
            job: 'dev ve bakara'
        },
    ]
    return Axios.request({
        url: `${END_POINTS.GENERAL_DATA}`,
        method: 'get',
        params
    })
}


export const ApiService = {
    getBlaBlaData,
}