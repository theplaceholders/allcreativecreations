
import { BASE_API_URL } from "./api_url";
const API_URL = `${BASE_API_URL}/admin`;

export const getUserByRole = async (role) => {
    try {
        const response = await fetch(`${API_URL}/role/${role}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching user by role', error);
    }
}