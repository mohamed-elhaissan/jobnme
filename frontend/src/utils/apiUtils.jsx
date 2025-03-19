import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:5000/api" });
export const request = ({ ...paramtres }) => {
    client.defaults.headers.common.Authorization = `Bearer ${window.localStorage.getItem(
        "authToken"
    )}`;
    const success = (reponse) => reponse;
    const onErr = (err) => {
        if (err.reponse && err.response.status == 401) {
            window.location.href= "/"
        } else {
            return Promise.reject(err);
        }}
    return client(paramtres).then(success).catch(onErr);
};