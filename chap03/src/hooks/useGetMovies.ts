import { axiosInstance1 } from '../apis/axios-instance';

interface GetMoviesResponse {
  results: Movie[];
  total_pages: number;
  page: number; // 현재 페이지 번호
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export const getMovies = async ({
  category,
  page,
}: {
  category: string;
  page: number;
}): Promise<GetMoviesResponse> => {
  const { data } = await axiosInstance1.get(`/movie/${category}?page=${page}`);
  return data;
};
