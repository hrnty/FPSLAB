import { Article } from '../../types';
import { Scale, Scan } from 'lucide-react';

export const gProXSuperlight2: Article = {
  id: 'g-pro-x-superlight-2',
  category: 'MOUSE',
  title: '王者の帰還 / Logicool G Pro X Superlight 2 レビュー',
  date: '2024.02.20',
  excerpt: '2000Hzポーリングレートと新型スイッチがもたらす変化とは。王者の座は守られるのか。',
  blocks: [
    {
      type: 'paragraph',
      content: 'Logicoolの伝説的なマウス、G Pro X Superlightの後継機がついに登場しました。'
    },
    {
      type: 'specs',
      specs: [
        { label: '重量', value: '約60g', icon: <Scale className="w-4 h-4" /> },
        { label: 'センサー', value: 'HERO 2', icon: <Scan className="w-4 h-4" /> },
      ]
    },
    {
      type: 'heading',
      content: '変わらない形状、変わった中身'
    },
    {
      type: 'paragraph',
      content: '形状は前作と全く同じ。これは「変える必要がない」という自信の表れでしょう。しかし、中身は別物です。'
    }
  ]
};
