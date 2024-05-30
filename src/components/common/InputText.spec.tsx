import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { BookStoreProvider } from "../../context/themeContext";
import React from "react";

describe("InputText 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    // 1. 렌더하기
    render(
      <BookStoreProvider>
        <InputText placeholder="여기에 입력" />
      </BookStoreProvider>
    );
    // 2. 확인
    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreProvider>
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
