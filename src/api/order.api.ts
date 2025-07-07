import { httpClient } from "./http";
interface DeliveryForm {
  address: string;
  addressDetail: string;
  receiver: string;
  contact: string;
}

interface OrderPayload {
  items: any[];
  delivery: DeliveryForm;
  total_quantity: number;
  first_book_title: string;
  total_price: number;
}
// 주문 생성
export const addOrder = async (params: OrderPayload) => {
  const response = await httpClient.post("/orders", params);
  return response.data;
};
