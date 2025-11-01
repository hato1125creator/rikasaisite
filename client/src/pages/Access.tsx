import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Train, Bus, Car, Clock } from 'lucide-react';
import { Link } from 'wouter';

export default function Access() {
  return (
    <Layout>
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold">アクセス・会場案内</h1>
            <p className="text-lg text-muted-foreground">
              梨花学園へのアクセス方法と校内マップをご案内します
            </p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                梨花学園 所在地
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-4">
                〒123-4567 東京都○○区○○町1-2-3
              </p>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Google Maps 埋め込み予定]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 電車でのアクセス */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="h-5 w-5 text-primary" />
                電車でお越しの方
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-semibold">JR○○線「○○駅」下車</p>
                    <p className="text-sm text-muted-foreground">
                      東口より徒歩15分
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-semibold">地下鉄○○線「○○駅」下車</p>
                    <p className="text-sm text-muted-foreground">
                      1番出口より徒歩10分
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-semibold">私鉄○○線「○○駅」下車</p>
                    <p className="text-sm text-muted-foreground">
                      北口より徒歩8分
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* バスでのアクセス */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5 text-secondary" />
                スクールバスをご利用の方
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  梨花祭開催期間中は、最寄り駅から無料のスクールバスを運行します。
                </p>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    7月18日（金）関係者公開日
                  </h4>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">
                      JR○○駅 東口バスロータリー発
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-sm">
                      <span className="bg-background px-2 py-1 rounded text-center">
                        9:30
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        10:00
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        10:30
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        15:30
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        16:00
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    7月19日（土）一般公開日
                  </h4>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">
                      JR○○駅 東口バスロータリー発
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-sm">
                      <span className="bg-background px-2 py-1 rounded text-center">
                        9:00
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        9:30
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        10:00
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        10:30
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        15:30
                      </span>
                      <span className="bg-background px-2 py-1 rounded text-center">
                        16:00
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  ※所要時間：約10分
                  <br />
                  ※混雑状況により、乗車できない場合がございます。あらかじめご了承ください。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* お車でのアクセス */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-accent" />
                お車でお越しの方
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  申し訳ございませんが、校内に来場者用の駐車場はございません。
                  <br />
                  公共交通機関をご利用いただくか、近隣のコインパーキングをご利用ください。
                </p>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-sm text-destructive font-semibold">
                    ご注意ください
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    学校周辺での路上駐車は近隣住民の迷惑となりますので、絶対におやめください。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 校内マップへのリンク */}
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="py-8">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-bold text-xl">校内マップ</h3>
                <p className="text-muted-foreground">
                  各企画の場所や施設の位置を確認できます
                </p>
                <Link href="/access/map">
                  <Button size="lg">
                    校内マップを見る
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
