import { WorkCategories } from "models";

export const sanouPortfolioCategories: Readonly<WorkCategories[]> = [
  {
    name: '全て',
    type: 'all',
  },
  {
    name: 'グラフィック',
    type: 'graphic',
  },
  {
    name: 'WEB',
    type: 'web',
  },
  {
    name: 'UI/UX',
    type: 'uiux',
  },
  {
    name: 'ロゴ',
    type: 'logo',
  },
  {
    name: 'イラスト',
    type: 'illust',
  },
] as const;
