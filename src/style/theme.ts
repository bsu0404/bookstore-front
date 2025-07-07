export type ThemeName = "light" | "dark";
export type ColorKey =
  | "primary"
  | "background"
  | "secondary"
  | "third"
  | "border"
  | "text";
// 헤더
export type HeadingSize = "large" | "medium" | "small";
// 버튼
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal" | "like";
// 헤더
export type LayoutWidth = "large" | "medium" | "small";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };
  button: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
}
// Record<>: 매핑으로 `생각하면 된다.
// 모든 타입으로 생성됨.
// 인터페이스 구현시 ColorKey의 모든 값을 키값으로 만들어야한다.
// 이 유틸리티는 타입의 프로퍼티를 다른 타입에 매핑 시키는데 사용될 수 있습니다.

// 밝음/어두움 테마 말고도 제목 사이즈에 따라 달라질 때도 이용 가능

// ?? global에 하면 안되나?
// => global은 props로 themeName만 받음
export const light: Theme = {
  name: "light",
  color: {
    primary: "	#E09E28",
    background: "lightgray",
    secondary: "#5F5F5F",
    third: "#FBC447",
    border: "gray",
    text: "black",
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  button: {
    large: {
      fontSize: "2rem",
      padding: "1rem 2rem",
    },
    medium: {
      fontSize: "1.5rem",
      padding: "0.5rem 1rem",
    },
    small: {
      fontSize: "1rem",
      padding: "0.25rem 0.5rem",
    },
  },
  buttonScheme: {
    primary: {
      color: "white",
      backgroundColor: "midnightBlue",
    },
    normal: {
      color: "black",
      backgroundColor: "lightgrey",
    },
    like: {
      color: "white",
      backgroundColor: "coral",
    },
  },
  borderRadius: {
    default: "4px",
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "320px",
    },
  },
};

export const dark: Theme = {
  ...light, // light 내용 가져오고 나머지는 오버라이드
  name: "dark",
  color: {
    primary: "#FFE699",
    background: "lightgray",
    secondary: "#A0A0A0",
    third: "#FBC447",
    border: "grey",
    text: "white",
  },
};

export const getTheme = (themeName: ThemeName) => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};
