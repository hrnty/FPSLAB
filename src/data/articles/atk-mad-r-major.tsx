import { Article } from '../../types';
import { Scale, Ruler, Scan } from 'lucide-react';

export const atkMadRMajor: Article = {
  id: 'atk-mad-r-major',
  category: 'MOUSE',
  title: '【極コスパ】メインマウス/ATK Mad R Major レビュー',
  date: '2024.02.23',
  excerpt: '価格1万円前後でこの性能は異常。センサーを掴める感覚があるマウス。',
  blocks: [
    {
      type: 'paragraph',
      content: 'こんにちは、はのです。\n今回はATKから発売されている Mad R Major をレビューします。'
    },
    {
      type: 'specs',
      specs: [
        { label: '重量', value: '約36g', icon: <Scale className="w-4 h-4" /> },
        { label: '全長', value: '約118mm', icon: <Ruler className="w-4 h-4" /> },
        { label: 'センサー', value: 'PixArt PAW3950', icon: <Scan className="w-4 h-4" /> },
      ]
    },
    {
      type: 'paragraph',
      content: '結論から言うと、\n「価格1万円前後でこの性能は異常」。\nそして何より、“センサーを掴める感覚”があるマウスです。'
    },
    {
      type: 'heading',
      content: 'なぜメインマウスになったのか'
    },
    {
      type: 'paragraph',
      content: 'これまでViper V3 ProやG Pro系、Lamzuなど、いわゆる有名どころを20個近く使ってきました。\n\nそれでも今メインで使っているのがこのMad R Major。\n\n理由はシンプルで、\n手に合う。そしてセンサーが近い。'
    },
    {
      type: 'heading',
      content: '形状の特徴'
    },
    {
      type: 'paragraph',
      content: '① 後部がやや膨らんだデザイン\n\nお尻側が少し膨らんでいて、母指球を自然にサポートしてくれます。\nただし、Viper V3 Proほど強い主張はない。あくまで“控えめ”。'
    },
    {
      type: 'paragraph',
      content: '② 細身でくびれが弱い\n\nここが最大のポイント。\n\nくびれが強いマウスは「ここに指を置いてください」という設計思想があります。\n一方Mad R Majorは、どこにでも指を置ける自由度がある。\n\n持ち方が固定されにくい＝\n自分の握りに合わせられる形状。'
    },
    {
      type: 'paragraph',
      content: '③ センサーが“感じられる”\n\n細身なので、\nセンサーの位置を指で把握しやすい。\n\nこれはエイムにおいてかなり重要。\n「今ここが中心だ」と身体が理解しやすい。'
    },
    {
      type: 'heading',
      content: 'サイズ感について'
    },
    {
      type: 'paragraph',
      content: 'ATKのマウスは全体的に小型寄り。\nいわゆる“アジア向けサイズ”に近い印象。\n\n欧米向けでやや大きめに感じるマウスに違和感がある人には、かなり刺さると思います。'
    },
    {
      type: 'heading',
      content: 'スペックがバグっている'
    },
    {
      type: 'list',
      items: [
        '約36gの超軽量',
        '8000Hz対応',
        '価格 約10,000円前後'
      ]
    },
    {
      type: 'paragraph',
      content: '同クラスの製品は2万円超えが当たり前。\n半額でこの性能は普通におかしい。\n\n自分は2000Hzで使用していますが、\n2日に1回の充電で十分持つ印象です。'
    },
    {
      type: 'heading',
      content: 'ウェブドライバーについて'
    },
    {
      type: 'paragraph',
      content: '良い点'
    },
    {
      type: 'list',
      items: [
        'UIが非常に見やすい',
        'DPIやポーリングレート調整が直感的',
        'センサー角度調整など珍しい機能あり'
      ]
    },
    {
      type: 'paragraph',
      content: '改善点'
    },
    {
      type: 'list',
      items: [
        '言語表示が不安定（日本語にしても中国語が混ざる）',
        '一部設定変更時に重くなることがある'
      ]
    },
    {
      type: 'paragraph',
      content: 'ただ、更新頻度が高いので今後の改善には期待できます。'
    },
    {
      type: 'heading',
      content: 'パッケージの謎'
    },
    {
      type: 'paragraph',
      content: 'ATK製のはずなのに、箱には「VX」と書かれている。\n\n初見だとブランドが分かりづらい。\nここは少し惜しいポイント。'
    },
    {
      type: 'heading',
      content: '実際の握り方'
    },
    {
      type: 'list',
      items: [
        '親指・薬指・小指をセンサー横に配置',
        '小指側はお尻部分に軽く接触',
        '親指はあまり接触させない'
      ]
    },
    {
      type: 'paragraph',
      content: 'この形状が母指球を自然に支えてくれる。\n結果、操作が非常に安定する。'
    },
    {
      type: 'heading',
      content: '総評'
    },
    {
      type: 'paragraph',
      content: 'これは万人向けではない。\n\nでも、'
    },
    {
      type: 'list',
      items: [
        '細身が好き',
        'センサー位置を感じたい',
        '軽量＆高ポーリングが欲しい',
        'コスパ重視'
      ]
    },
    {
      type: 'paragraph',
      content: 'こういう人には確実に刺さる。\n\n“有名ブランドじゃないから不安”\nそう思う人ほど一度触ってほしい。\n\n正直、この価格帯ではトップクラス。\n\n刺さる人には本当に刺さるマウス。\n気になった人はぜひチェックしてみてください。'
    }
  ]
};
