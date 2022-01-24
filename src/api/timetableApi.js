import axiosClient from './axiosClient';

const timtableApi = {

    getAll() {
        const url = `/timetable`;
        return axiosClient.get(url);
    },

};
export default timtableApi;
