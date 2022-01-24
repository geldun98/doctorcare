import axiosClient from './axiosClient';

const updateTimeApi = {
    getAll(params) {
        const url = '/timetable';
        return axiosClient.get(url, { params: params });
    },
    get(id) {
        const url = `/timetable/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/timetable`;
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/timetable/${data.id}`;
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/timetable/${id}`;
        return axiosClient.delete(url);
    },
};
export default updateTimeApi;
