export interface Movie {
  id?: number;
  poster_path: string;
  original_title: string;
  overview: string;
  title?: string;
  release_date?: Date;
}

export interface MovieDetails extends Movie {
  status: string;
  tagline: string;
  vote_average: number;
}
