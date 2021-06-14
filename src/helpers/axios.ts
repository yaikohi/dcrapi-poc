import Axios from 'axios';
import useSWR from 'swr';

const axiosInstance = Axios.create({
  validateStatus: () => true
})

axiosInstance.interceptors.response.use(res => res, function (error) {
  return error
})

const axiosFetcher = (url: string) => axiosInstance.get(url).then(res => res.data)

export function useRequest(url: string) {
  const { data } = useSWR(url, axiosFetcher)
  return data
}