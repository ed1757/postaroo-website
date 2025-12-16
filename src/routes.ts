import { CANONICAL_ROOT, routeMeta as routeMetaData } from './routes-data.js';

export type RouteId = 'home' | 'product' | 'pricing' | 'about' | 'privacy' | 'terms';

export interface RouteMeta {
  path: string;
  page: RouteId;
  title: string;
  description: string;
  label: string;
  changefreq: string;
  priority: string;
}

export const routeMeta: RouteMeta[] = routeMetaData;

export const routeMetaByPage = new Map(routeMeta.map((meta) => [meta.page, meta]));
export const routeMetaByPath = new Map(routeMeta.map((meta) => [meta.path, meta]));

export const routePaths = routeMeta.map((meta) => meta.path);

export { CANONICAL_ROOT };
