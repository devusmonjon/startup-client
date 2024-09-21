import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksType } from "src/interfaces/books.interface";
import { ProductsType } from "src/interfaces/constants.interface";
import { CourseType } from "src/interfaces/course.interface";
import { CartInitialState } from "./cart.interface";
import * as localStorage from "localStorage";

const initialState: CartInitialState = {
  books: JSON.parse(localStorage.getItem("books")!) || [],
  courses: JSON.parse(localStorage.getItem("courses")!) || [],
  product: JSON.parse(localStorage.getItem("product")!) || ({} as ProductsType),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, { payload }: PayloadAction<BooksType>) => {
      state.books = [...state.books, payload];
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    addCourseToCart: (state, { payload }: PayloadAction<CourseType>) => {
      state.courses = [...state.courses, payload];
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    editCourseCart: (state, { payload }: PayloadAction<CourseType[]>) => {
      state.courses = payload;
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    addProductToCart: (state, { payload }: PayloadAction<ProductsType>) => {
      state.product = payload;
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    removeBookFromCart: (state, { payload }: PayloadAction<string>) => {
      const newArr = state.books.filter((c) => c._id !== payload);
      state.books = newArr;
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    removeCourseFromCart: (state, { payload }: PayloadAction<string>) => {
      const newArr = state.courses.filter((c) => c._id !== payload);
      state.courses = newArr;
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    clearCart: (state) => {
      state.books = [];
      state.courses = [];
      state.product = {} as ProductsType;
      localStorage.clear();
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartSliceAction = cartSlice.actions;
