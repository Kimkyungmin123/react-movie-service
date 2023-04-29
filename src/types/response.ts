export interface AllMovies {
  data: {
    limit: number;
    movie_count: number;
    movies: MovieData[];
    page_number: number;
  };
}

export interface MovieData {
  id: number;
  year: number;
  medium_cover_image: string;
  title: string;
  genres: string;
  synopsis: string;
}

export interface DetailedMovieData {
  runtime: number;
  medium_cover_image: string;
  background_image_original: string;
  like_count: number;
  description_intro: string;
  title: string;
  url: string;
  id: number;
}
