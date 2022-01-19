import axiosClient from '../../api/axiosClient';

const MloginApi = {
  getAll(params) {
    const url = '/auth/login';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/auth/login/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/auth/login`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/auth/login/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/auth/login/${id}`;
    return axiosClient.delete(url);
  },
};
export default MloginApi;