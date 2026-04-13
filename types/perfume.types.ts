export interface Perfume {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
}
