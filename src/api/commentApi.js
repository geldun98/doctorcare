import axiosClient from './axiosClient';

const commentApi = {
  getAll(params) {
    const url = '/comments';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/comments/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/comments`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/comments/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/comments/${id}`;
    return axiosClient.delete(url);
  },
};
export default commentApi;
