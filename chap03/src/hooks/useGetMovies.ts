import { axiosInstance1 } from '../apis/axios-instance';

interface GetMoviesResponse {
  results: Movie[];
  total_pages: number;
  page: number;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}


export const getMovies = async ({
  category,
  pageParam,
}: {
  category: string;
  pageParam: number;
}): Promise<GetMoviesResponse> => {
  const { data } = await axiosInstance1.get(
    `/movie/${category}?page=${pageParam}`
  );
  return data;
};



