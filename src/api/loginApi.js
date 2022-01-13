import axiosClient from './axiosClient';

const loginApi = {
  getAll(params) {
    const url = '/login';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/login/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/login`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/login/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/login/${id}`;
    return axiosClient.delete(url);
  },
};
export default loginApi;
