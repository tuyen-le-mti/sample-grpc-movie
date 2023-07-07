import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import {
  MovieListRequest,
  MovieListResponse,
  MovieServiceController,
  MovieServiceControllerMethods,
} from '../protos/movie';

@Controller({ path: 'movie' })
@MovieServiceControllerMethods()
export class MovieController implements MovieServiceController {
  getMovieList(
    request: MovieListRequest,
    metadata?: Metadata,
  ): MovieListResponse {
    return {
      items: [],
      pagination: {
        page: request.page,
        limit: request.limit,
        total: 100,
        totalPage: 10,
      },
    };
  }
}
