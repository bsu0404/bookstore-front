import styled from "styled-components";
import Button from "../common/Button";
import Title from "../common/Title";
import { Cart } from "../../models/cart.model";
import { formatNumber } from "../../utils/format";
import CheckIconButton from "./CheckIconButton";
import { useMemo } from "react";
import { useAlert } from "../../hooks/useAlert";
interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}
const CartItem = ({ cart, checkedItems, onCheck, onDelete }: Props) => {
  const { showConfirm } = useAlert();
  // 아이템이 체크되어있는지.
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    //confirm
    showConfirm("정말 삭제하시겠습니까?", () => {
      onDelete(cart.id);
    });
  };

  return (
    <CartItemStyled>
      <div className="info">
        <div className="check">
          <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        </div>

        <div>
          <Title size="medium" color="text">
            {cart.title}
          </Title>
          <p className="summary"> {cart.summary}</p>
          <p className="price"> {formatNumber(cart.price)}원</p>
          <p className="price"> {cart.quantity}권</p>
        </div>
      </div>
      <Button size="medium" scheme="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyled>
  );
};

const CartItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 1px solid ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  .info {
    display: flex;
    align-items: start;
    flex: 1;

    .check {
      width: 40px;
      flex-shrink: 0;
    }

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

export default CartItem;
