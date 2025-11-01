import { useState } from 'react';
import Layout from '@/components/Layout';
import ProgramCard from '@/components/ProgramCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProgramType } from '@/types';
import { Search, Loader2, AlertCircle } from 'lucide-react';
import { usePrograms } from '@/hooks/usePrograms';

const filterOptions: { label: string; value: ProgramType | 'all' }[] = [
  { label: 'すべて', value: 'all' },
  { label: 'クラス発表', value: 'class' },
  { label: '部活動', value: 'club' },
  { label: '飲食', value: 'food' },
];

export default function Programs() {
  const { programs, loading, error, refetch } = usePrograms();
  const [selectedFilter, setSelectedFilter] = useState<ProgramType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = programs.filter((program) => {
    const matchesFilter = selectedFilter === 'all' || program.type === selectedFilter;
    const matchesSearch =
      searchQuery === '' ||
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold">企画紹介</h1>
            <p className="text-lg text-muted-foreground">
              クラス発表、部活動発表、飲食企画など、梨花祭の多彩なプログラムをご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* フィルター・検索 */}
      <section className="py-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* カテゴリフィルター */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={selectedFilter === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>

            {/* 検索 */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="企画を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 企画一覧 */}
      <section className="py-12">
        <div className="container">
          {/* エラー表示 */}
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-destructive font-semibold">{error}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => refetch()}
                >
                  再読み込み
                </Button>
              </div>
            </div>
          )}

          {/* ローディング */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">企画情報を読み込んでいます...</p>
            </div>
          ) : filteredPrograms.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                {filteredPrograms.length}件の企画が見つかりました
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                条件に一致する企画が見つかりませんでした
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
              >
                フィルターをリセット
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
