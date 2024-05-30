export interface Order {
  id: number;
  createAt: string;
  address: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  total_quantity: number;
  total_price: number;
}

export interface OrderSheet {
  items: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: Delivery;
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}
