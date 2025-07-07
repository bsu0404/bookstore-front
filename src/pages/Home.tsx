import styled from "styled-components";
import Title from "../components/common/Title";
import { useBook } from "../hooks/useBook";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { book } = useBook("11");
  const navigate = useNavigate();

  return (
    <>
      <Title size="medium">home</Title>

      <Container
        onClick={() => {
          navigate(`/book/${book?.id}`);
        }}
      >
        <h1>📚 이달의 추천 도서 📚</h1>
        <p>지금 바로 만나보세요!</p>
        <BookBox>
          <img className="book_img" src={book?.img} alt={book?.title} />
          <Title size="small">{book?.title}</Title>
          <div>{book?.summary}</div>
        </BookBox>
        <p>독서로 마음의 양식을 채우고 지혜를 넓혀보세요.</p>
      </Container>
    </>
  );
};

const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const BookBox = styled.div`
  width: 70%;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  .book_img {
    width: 200px;
  }
`;

export default Home;
