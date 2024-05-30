import styled from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}
const CheckIconButton = ({ isChecked, onCheck }: Props) => {
  return (
    <CheckIconBttonStyled onClick={onCheck}>
      {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
    </CheckIconBttonStyled>
  );
};

const CheckIconBttonStyled = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default CheckIconButton;
