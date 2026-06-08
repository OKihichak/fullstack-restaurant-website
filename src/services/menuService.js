const API_URL = "http://127.0.0.1:8000";

export const getMenuItems = async () => {
    const response = await fetch(`${API_URL}/menu/`);

    if (!response.ok) {
        throw new Error("Failed to fetch menu");
    }

    return response.json();
};


export const getFeaturedCocktails = async () => {
    const response = await fetch(
        "http://127.0.0.1:8000/menu/featured-cocktails"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch cocktails");
    }

    return response.json();
};


export const getSpecialItem = async () => {
    const response = await fetch(
        "http://127.0.0.1:8000/menu/special"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch special item");
    }

    return response.json();
};