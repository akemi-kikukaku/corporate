import { WorkCategories } from "models";

export const unouPortfolioCategories: Readonly<WorkCategories[]> = [
  {
    name: '全て',
    type: 'all',
  },
  {
    name: 'クライアントワーク',
    type: 'client',
  },
  {
    name: '自主制作',
    type: 'art',
  },
] as const;
