import axiosClient from './axiosClient';

const questionApi = {
  getAll(params) {
    const url = '/questions';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/questions/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/questions`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/questions/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/questions/${id}`;
    return axiosClient.delete(url);
  },
};
export default questionApi;
