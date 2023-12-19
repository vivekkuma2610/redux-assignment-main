import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('/product.json'); // Replace with the correct path
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};