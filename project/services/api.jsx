const API_URL = "http://localhost:5000/api/products"; 

// ✅ Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// ✅ Fetch a single product by ID
export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
};

// ✅ Create a new product
export const createProduct = async (productData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });

        return await response.json();
    } catch (error) {
        console.error("Error creating product:", error);
        return { error: "Failed to create product" };
    }
};

// ✅ Update a product by ID
export const updateProduct = async (id, productData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });

        return await response.json();
    } catch (error) {
        console.error(`Error updating product ${id}:`, error);
        return { error: "Failed to update product" };
    }
};

// ✅ Delete a product by ID
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error deleting product ${id}:`, error);
        return { error: "Failed to delete product" };
    }
};
