import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return ({ success: false, "message": 'Please enter all information' });
    }

    try {
      const res = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, message: errorData.message || 'Failed to create product' };
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, "message": 'Product created successfully' };

    } catch (error) {
      console.error('Error creating product:', error);
      return { success: false, "message": 'An error occurred while creating the product' };
    }
  },
}));
