import axiosClient from './axiosClient';

const timtableApi = {

    get(id) {
        const url = `/doctors/${id}`;
        return axiosClient.get(url);
    },

};
export default timtableApi;
