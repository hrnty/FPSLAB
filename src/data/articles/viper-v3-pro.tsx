import { Article } from '../../types';
import { Scale, Scan } from 'lucide-react';

export const viperV3Pro: Article = {
  id: 'viper-v3-pro',
  category: 'MOUSE',
  title: '完璧な形状 / Razer Viper V3 Pro レビュー',
  date: '2024.02.15',
  excerpt: 'プロシーンを席巻する新たなスタンダード。',
  blocks: [
    {
      type: 'paragraph',
      content: 'Razerが放つ本気のマウス、Viper V3 Pro。'
    },
    {
      type: 'specs',
      specs: [
        { label: '重量', value: '約54g', icon: <Scale className="w-4 h-4" /> },
        { label: 'センサー', value: 'Focus Pro Gen-2', icon: <Scan className="w-4 h-4" /> },
      ]
    },
    {
      type: 'heading',
      content: 'エルゴノミクスに近い左右対称'
    },
    {
      type: 'paragraph',
      content: '手になじむ感覚が素晴らしい。'
    }
  ]
};
