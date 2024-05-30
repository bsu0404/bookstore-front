import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookStoreProvider } from "../../context/themeContext";

describe("button 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    // 1. 렌더하기
    render(
      <BookStoreProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreProvider>
    );
    // 2. 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("font-size props", () => {
    const { container } = render(
      <BookStoreProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreProvider>
    );
    expect(screen.getByRole("button")).toHaveStyle({
      fontSize: "2rem",
    });
  });
});
