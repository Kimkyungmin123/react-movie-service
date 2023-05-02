import axios from "axios";
import { AllMovies } from "types/response";

type SortType =
  | "title"
  | "year"
  | "rating"
  | "peers"
  | "seeds"
  | "download_count"
  | "like_count"
  | "date_added";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

const getMovies = async (
  page: number = 1,
  limit: number = 20,
  rate: number = 8,
  sort_by: SortType = "date_added"
) => {
  const { data } = await instance.get<AllMovies>(
    `/list_movies.json?page=${page}&limit=${limit}&minimum_rating=${rate}&sort_by=${sort_by}`
  );
  return data;
};

const api = { getMovies };
export default api;
