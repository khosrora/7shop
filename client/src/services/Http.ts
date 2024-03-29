import axios, { AxiosInstance, AxiosResponse } from "axios";



export default class Http {

    private baseURL: string;
    private instance: AxiosInstance;

    constructor() {
        this.baseURL = "http://localhost:5000"
        this.instance = axios.create();
    }

    public post(endPoint: string, params: Object): Promise<AxiosResponse> {
        return this.instance.post(`${this.baseURL}/${endPoint}`, params)
    }

    public get(endPoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseURL}/${endPoint}`)
    }

}