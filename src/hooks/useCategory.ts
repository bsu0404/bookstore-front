import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";
import { useLoaderData, useLocation } from "react-router-dom";

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const location = useLocation();

  const setActive = () => {
    // location.search는 현재 페이지의 URL에서 쿼리 문자열(query string) 부분
    const params = new URLSearchParams(location.search);
    // params의 category_id 받아옴
    if (params.get("category_id")) {
      // 기존 카테고리에서 active설정을 바꿈
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.category_id === Number(params.get("category_id")),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return; //카테고리가 없는 경우?
      const categoryWithAll = [
        {
          category_id: null,
          category_name: "전체",
        },
        ...category,
      ];
      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  // location.search는 현재 페이지의 URL에서 쿼리 문자열(query string) 부분
  // []는 새로고침인데 그것과 다른가?
  useEffect(() => {
    setActive();
  }, [location.search]);
  return { category };
};
