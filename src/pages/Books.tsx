import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import { useBooks } from "../hooks/useBooks";

const Books = () => {
  const { books, pagination, isEmpty } = useBooks();
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyled>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>

        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BooksStyled>
    </>
  );
};

const BooksStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-item: center;
  }
`;

export default Books;
