export interface Book {
  id: number;
  title: string;
  img: null;
  category_id: number;
  form: string;
  isbn: string;
  detail: string;
  pages: number;
  summary: string;
  author: string;
  price: number;
  pub_date: string;
  contents: string;
  likes: number;
}

export interface BookDetail extends Book {
  category_name: "동화";
  liked: boolean;
}
