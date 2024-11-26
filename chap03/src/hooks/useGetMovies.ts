import { axiosInstance1 } from '../apis/axios-instance';

interface GetMoviesParams {
  category: string; 
  pageParam: number; 
}

export const getMovies = async ({ category, pageParam }: GetMoviesParams) => {
  const { data } = await axiosInstance1.get(`/movie/${category}?language=ko-KR&page=${pageParam}`);
  return data;
};
