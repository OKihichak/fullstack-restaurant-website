const API_URL = "http://127.0.0.1:8000";

export const getMenuItems = async () => {
    const response = await fetch(`${API_URL}/menu/`);

    if (!response.ok) {
        throw new Error("Failed to fetch menu");
    }

    return response.json();
};