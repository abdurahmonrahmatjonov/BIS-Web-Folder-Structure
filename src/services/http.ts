import axios from "axios";
import { config } from "../config";
import { session } from "./session";

export const http = axios.create({ baseURL: config.baseURL });

http.interceptors.request.use((request: any) => {
	const token: string = session.get();

	if (token) {
		request.headers = {
			...request.headers,
			[config.backendTokenKEY]: `Bearer ${token}`,
		};
	}

	return request;
});
