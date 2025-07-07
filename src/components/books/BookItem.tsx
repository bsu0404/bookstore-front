import styled from "styled-components";
import { Book } from "../../models/book.model";
import { formatNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Props {
  book: Book;
  direction?: "row" | "column";
}
const BooksItem = ({ book, direction = "column" }: Props) => {
  return (
    <BooksItemStyle direction={direction}>
      <Link to={`/book/${book.id}`}>
        <div className="img_container">
          <img src={book.img} alt={book.title} />
        </div>
        <div className="content">
          <h2 className="title">{book.title}</h2>
          <p className="summary">{book.summary}</p>
          {direction === "row" && <p className="detail">{book.detail}</p>}
          <p className="author">{book.author}</p>
          <p className="price">{formatNumber(book.price)}원</p>
          <div className="likes">
            <FaHeart className="heart-icon" /> {book.likes}
          </div>
        </div>
      </Link>
    </BooksItemStyle>
  );
};

interface StyledProps {
  direction: "row" | "column";
}

const BooksItemStyle = styled.div<StyledProps>`
  a {
    display: flex;
    flex-direction: ${({ direction }) => direction};
    box-shadow: 0 0 4px rgba(0, 0, 0, 2);
    text-decoration: none;
  }

  .img_container {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;
    img {
      max-width: ${({ direction }) => (direction === "row" ? "200px" : "100%")};
    }
  }

  .content {
    flex: 1;
    padding: 16px;
    position: relative;
    .title {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 12px 0;
    }
    .summary {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 12px 0;
    }
    .author {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 12px 0;
    }
    .price {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 12px 0;
      font-weight: 700;
    }
    .detail {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 12px 0;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .likes {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.background};
      margin: 0 0 4px 0;
      font-weight: 700;
      padding: 4px 12px;
      position: absolute;
      bottom: 16px;
      right: 16px;

      svg {
        color: ${({ theme }) => theme.color.background};
        * {
          color: inherit;
        }
      }
    }
  }
`;

export default BooksItem;
