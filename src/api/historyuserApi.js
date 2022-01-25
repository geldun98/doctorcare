import axiosClient from './axiosClient';

const historyuserApi = {
  getAll(params) {
    const url = '/historyuser';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/historyuser/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/historyuser`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/historyuser/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/historyuser/${id}`;
    return axiosClient.delete(url);
  },
};
export default historyuserApi;
