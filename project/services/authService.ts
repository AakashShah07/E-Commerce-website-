const API_URL = "https://e-commerce-website-1-sy93.onrender.com/api/users"; 

export const signup = async (userData: { username: string; password: string }) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error("Signup error:", error);
        return { error: "Failed to sign up" };
    }
};

export const login = async (userData: { username: string; password: string }) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error("Login error:", error);
        return { error: "Failed to log in" };
    }
};
