import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    // 1. 렌더 , 가상화면에 렌더
    render(
      <BookStoreProvider>
        <Title size="large">제목</Title>
      </BookStoreProvider>
    );
    // 2. 확인
    expect(screen.getByText("제목")).toBeInTheDocument();
  });
});

// it("size props 적용", () => {
//   const { container } = render(
//     <BookStoreProvider>
//       <Title size="large">제목</Title>
//     </BookStoreProvider>
//   );

//   expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
// });

// it("color props 적용", () => {
//   const { container } = render(
//     <BookStoreProvider>
//       <Title size="large" color="primary">
//         제목
//       </Title>
//     </BookStoreProvider>
//   );

//   expect(container?.firstChild).toHaveStyle({ color: "brown" });
// });

// 화면상의 문서에 있는가
// 렌더 후 select해서 document에 있는지 확인하는 작업
// $ npm run test
// npx run test Title.tsx
