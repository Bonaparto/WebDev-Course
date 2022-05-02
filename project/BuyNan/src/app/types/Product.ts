import type { Item } from './Item';

export interface Product extends Item {
  price: number;
  provider: string;
  category: string;
}