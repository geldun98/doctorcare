import axiosClient from './axiosClient';

const doctorApi = {
  getAll(params) {
    const url = '/doctors';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/doctors/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/doctors`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/doctors/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/doctors/${id}`;
    return axiosClient.delete(url);
  },
};
export default doctorApi;
