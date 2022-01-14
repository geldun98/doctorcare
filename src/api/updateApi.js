import axiosClient from './axiosClient';

const updateApi = {
  getAll(params) {
    const url = '/userupdate';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/userupdate/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/userupdate`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/userupdate/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/userupdate/${id}`;
    return axiosClient.delete(url);
  },
};
export default updateApi;
