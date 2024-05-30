import BookItem from "./BookItem";
import { Book } from "../../models/book.model";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect, useState } from "react";
import { ViewMode } from "./BooksViewSwitcher";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  const location = useLocation();
  const [view, setView] = useState<ViewMode>("grid");

  // view mode 상태 설정을 위한 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [location.search]);

  return (
    <BooksListStyle view={view}>
      {books?.map((item) => (
        <BookItem key={item.id} book={item} />
      ))}
    </BooksListStyle>
  );
};

interface BookListStyleProps {
  view: ViewMode;
}

const BooksListStyle = styled.div<BookListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"};
  gap: 24px;
`;

export default BooksList;
