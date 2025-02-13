export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export type ProductFormData = Omit<Product, 'id'>;