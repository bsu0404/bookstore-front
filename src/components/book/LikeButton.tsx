import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import { FaHeart } from "react-icons/fa";
import { ButtonStyle } from "../common/Button";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

const LikeButton = ({ book, onClick }: Props) => {
  return (
    <LikeButtonStyle
      size="small"
      scheme={book.liked ? "like" : "normal"}
      onClick={onClick}
    >
      <FaHeart />
      {book.likes}
    </LikeButtonStyle>
  );
};
const LikeButtonStyle = styled(ButtonStyle)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;

export default LikeButton;
