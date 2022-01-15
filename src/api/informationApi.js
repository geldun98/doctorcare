import axiosClient from './axiosClient';

const informationApi = {
  getAll(params) {
    const url = '/information';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/information/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/information`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/information/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/information/${id}`;
    return axiosClient.delete(url);
  },
};
export default informationApi;
