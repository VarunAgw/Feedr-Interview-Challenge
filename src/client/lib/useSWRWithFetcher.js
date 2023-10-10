import axios from 'axios'
import useSWR from "swr";


const fetcher = async (url, params) => {
    const response = await axios.get(url, {params: params});
    return response.data;
}

export default (url, params) => {
    return useSWR(
        ["/api/" + url, params],
        () => fetcher("/api/" + url, params)
    );
}