import { axiosInstance1 } from '../apis/axios-instance';

export interface MovieDetail {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

// 영화 상세 정보를 가져오는 함수
export const getMovieDetail = async (movieId: string): Promise<MovieDetail> => {
  const { data } = await axiosInstance1.get(`/movie/${movieId}`);
  return data;
};

// 영화 출연진 정보를 가져오는 함수
export const getMovieCredits = async (movieId: string): Promise<{ cast: CastMember[] }> => {
  const { data } = await axiosInstance1.get(`/movie/${movieId}/credits`);
  return data;
};

