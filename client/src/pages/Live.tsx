import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertCircle, ShoppingBag, Instagram } from 'lucide-react';

export default function Live() {
  return (
    <Layout>
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold">リアルタイム情報</h1>
            <p className="text-lg text-muted-foreground">
              落とし物、売り切れ情報、最新のお知らせをお届けします
            </p>
          </div>
        </div>
      </section>

      {/* 最新情報 */}
      <section className="py-12">
        <div className="container max-w-4xl">
          {/* Instagram連携案内 */}
          <Card className="mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="py-8">
              <div className="text-center space-y-4">
                <Instagram className="h-12 w-12 mx-auto text-primary" />
                <div>
                  <h3 className="font-bold text-xl mb-2">公式Instagram</h3>
                  <p className="text-muted-foreground">
                    最新情報は公式Instagramでも随時更新中
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ハッシュタグ: <span className="font-semibold">#梨花祭2026</span>
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Badge className="bg-primary text-primary-foreground text-base px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity">
                    Instagramを見る
                  </Badge>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 売り切れ情報 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-destructive" />
                売り切れ情報
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold">3年C組 たこ焼き屋台</p>
                    <p className="text-sm text-muted-foreground">
                      たこ焼き（10個入り）
                    </p>
                  </div>
                  <Badge variant="destructive">売り切れ</Badge>
                </div>
                <div className="flex items-start justify-between gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold">2年D組 クレープ屋台</p>
                    <p className="text-sm text-muted-foreground">
                      いちごクレープ
                    </p>
                  </div>
                  <Badge variant="destructive">売り切れ</Badge>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  最終更新: 2026年7月19日 14:30
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 落とし物情報 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                落とし物情報
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-semibold">黒いリュックサック</p>
                    <span className="text-xs text-muted-foreground">14:15</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    発見場所: 体育館前
                    <br />
                    お心当たりのある方は本部までお越しください
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-semibold">青い折りたたみ傘</p>
                    <span className="text-xs text-muted-foreground">13:40</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    発見場所: 2階廊下
                    <br />
                    お心当たりのある方は本部までお越しください
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-semibold">スマートフォン（白）</p>
                    <span className="text-xs text-muted-foreground">12:50</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    発見場所: 中庭ベンチ付近
                    <br />
                    お心当たりのある方は本部までお越しください
                  </p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-primary mb-1">
                    落とし物のお問い合わせ
                  </p>
                  <p className="text-xs text-muted-foreground">
                    落とし物に関するお問い合わせは、本部（体育館入口）までお越しください。
                    <br />
                    身分証明書をご持参の上、落とし物の特徴をお伝えください。
                  </p>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  最終更新: 2026年7月19日 14:30
                </p>
              </div>
            </CardContent>
          </Card>

          {/* お知らせ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                最新のお知らせ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-semibold">後夜祭の開始時刻変更について</p>
                    <span className="text-xs text-muted-foreground">15:00</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    本日の後夜祭は、準備の都合により開始時刻を16:45に変更いたします。
                    ご了承ください。
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-semibold">体育館前の混雑について</p>
                    <span className="text-xs text-muted-foreground">13:30</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    現在、体育館前が大変混雑しております。
                    時間に余裕を持ってお越しください。
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-semibold">梨花祭賞の投票受付中</p>
                    <span className="text-xs text-muted-foreground">10:00</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    梨花祭賞の投票を受付中です。
                    15:00までにぜひご投票ください。
                  </p>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  最終更新: 2026年7月19日 15:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
