import { BASE_API_URL } from "./api_url";
const API_URL = `${BASE_API_URL}/reservation`;

export const getReservations = async () => {
    try {
        const response = await fetch(`${API_URL}/list`);
        return response.json();
    } catch (error) {
        console.error('Error fetching customers', error);
    }
}
export const getReservationsWithCustomerInfo = async () => {
    try {
        const response = await fetch(`${API_URL}/infolist`);
        return response.json();
    } catch (error) {
        console.error('Error fetching customers', error);
    }
}