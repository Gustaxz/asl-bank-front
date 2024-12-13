import { API_URL } from "@/constants/ulrs";
import axios from "axios";

export const api = axios.create({
    baseURL: API_URL,
});