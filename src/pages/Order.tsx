import { useLocation } from "react-router-dom";
import Title from "../components/common/Title";
import { CartStyle } from "./Cart";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import { useForm } from "react-hook-form";
import { Delivery } from "../models/order.model";
import { addOrder } from "../api/order.api";

interface DeliveryForm extends Delivery {
  addressDetail: string;
}
const Order = () => {
  const location = useLocation();
  const orderDataFromCart = location.state;
  const { items, totalPrice, totalQuantity, firstBookTitle } =
    orderDataFromCart;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryForm>();

  const onSubmit = (data: DeliveryForm) => {
    // delivery 데이터
    const delivery = {
      address: data.address,
      addressDetail: data.addressDetail,
      receiver: data.receiver,
      contact: data.contact,
    };

    const orderPayload = {
      items: items,
      delivery: delivery,
      total_quantity: totalQuantity,
      first_book_title: firstBookTitle,
      total_price: totalPrice,
    };

    addOrder(orderPayload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title size="large">주문서 작성</Title>
      <CartStyle>
        <div className="content">
          <div className="order-info">
            <Title size="medium" color="text">
              배송 정보
            </Title>
            <div className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("address", { required: true })}
                  />
                </div>
                <Button size="small" scheme="normal" type="button">
                  주소 찾기
                </Button>
              </fieldset>
              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("addressDetail", { required: true })}
                  />
                </div>
              </fieldset>
              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("receiver", { required: true })}
                  />
                </div>
              </fieldset>
              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("contact", { required: true })}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="order-info">
            <Title size="medium" color="text">
              주문 상품
            </Title>
            <strong>
              {firstBookTitle} 등 총 {totalQuantity} 권
            </strong>
          </div>
        </div>
        <div className="summary">
          <CartSummary totalPrice={totalPrice} totalQuantity={totalQuantity} />
          <Button size="large" scheme="primary" type="submit">
            결제하기
          </Button>
        </div>
      </CartStyle>
    </form>
  );
};

export default Order;
