import axiosClient from '../../api/axiosClient';

const MilogioutApi = {
  getAll(params) {
    const url = '/auth/register';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/auth/register/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/auth/register`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/auth/register/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/auth/register/${id}`;
    return axiosClient.delete(url);
  },
};
export default MilogioutApi;
