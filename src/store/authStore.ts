import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}
// 주스탠드는 상태 정보와 "action함수"를 같이 선언한다.

export const getToken = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: getToken() ? true : false, //초기값
  storeLogin: (token: string) => {
    set({ isLoggedIn: true });
    setToken(token);
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
    removeToken();
    console.log(localStorage.getItem("token"));
  },
}));

// import create from "zustand";

// interface AuthStoreState {
//   isLoggedIn: boolean;
//   token: string | null;
//   setLogin: (token: string) => void;
//   setLogout: () => void;
// }

// export const useAuthStore = create<AuthStoreState>((set) => ({
//   isLoggedIn: false,
//   token: localStorage.getItem("token"),
//   setLogin: (token: string) => {
//     set({ isLoggedIn: true, token: token });
//     localStorage.setItem("token", token);
//   },
//   setLogout: () => {
//     set({ isLoggedIn: false, token: null });
//     localStorage.removeItem("token");
//   },
// }));
