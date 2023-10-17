import axios from "axios";

const requester = axios.create()

requester.interceptors.request.use((config) => {
    // console.log('req config', config)
    return config
}, (error) => {
    console.error('req error', error)
    return Promise.reject(error);
});

requester.interceptors.response.use((resp) => {
    // console.log('resp', resp)
}, (error) => {
    console.error('resp error', error)
    return Promise.reject(error);
})

export const buildPath = (path) => {
    return (process.env.NODE_ENV === "development" ? "/api" : "") + path
}
export default requester