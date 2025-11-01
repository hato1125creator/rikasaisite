import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock } from 'lucide-react';
import { Program } from '@/types';
import { Link } from 'wouter';

interface ProgramCardProps {
  program: Program;
}

const programTypeLabels: Record<Program['type'], string> = {
  class: 'クラス発表',
  club: '部活動',
  food: '飲食',
};

const programTypeColors: Record<Program['type'], string> = {
  class: 'bg-primary text-primary-foreground',
  club: 'bg-secondary text-secondary-foreground',
  food: 'bg-accent text-accent-foreground',
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {program.images.length > 0 && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={program.images[0]}
            alt={program.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={programTypeColors[program.type]}>
            {programTypeLabels[program.type]}
          </Badge>
          {program.type === 'food' && program.isFoodSoldOut && (
            <Badge variant="destructive">売り切れ</Badge>
          )}
        </div>
        <h3 className="font-bold text-lg">{program.title}</h3>
        <p className="text-sm text-muted-foreground">{program.organizer}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-2 mb-4">{program.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{program.location}</span>
          </div>
          {(program.schedule.day1 || program.schedule.day2) && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>
                {program.schedule.day1 &&
                  `7/18: ${program.schedule.day1.start}〜${program.schedule.day1.end}`}
                {program.schedule.day1 && program.schedule.day2 && ' / '}
                {program.schedule.day2 &&
                  `7/19: ${program.schedule.day2.start}〜${program.schedule.day2.end}`}
              </span>
            </div>
          )}
        </div>
        {program.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {program.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/programs/${program.id}`}>
          <Button variant="outline" className="w-full">
            詳細を見る
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
