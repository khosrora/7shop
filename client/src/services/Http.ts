import axios, { AxiosInstance, AxiosResponse } from "axios";



export default class Http {

    private baseURL: string;
    private instance: AxiosInstance;

    constructor() {
        this.baseURL = "http://localhost:5000"
        this.instance = axios.create();
    }

    public post( endPoint : string , params: Object): Promise<AxiosResponse> {
        return this.instance.post(`${this.baseURL}/${endPoint}`, params)
    }

}