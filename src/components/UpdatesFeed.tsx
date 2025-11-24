// Latest updates feed component
import { useState, useEffect } from 'react';
import { getUpdates } from '@/utils/localStorage';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar } from 'lucide-react';

const UpdatesFeed = () => {
  const { t, i18n } = useTranslation();
  const [updates, setUpdates] = useState<any[]>([]);

  useEffect(() => {
    setUpdates(getUpdates());
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = i18n.language === 'te' ? 'te-IN' : 'en-IN';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="updates" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('updates.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('updates.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {updates.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">{t('updates.noUpdates')}</p>
              </CardContent>
            </Card>
          ) : (
            updates.map((update, index) => (
              <Card
                key={update.id}
                className="hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <CardTitle className="text-xl md:text-2xl">{update.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(update.date)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{update.body}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdatesFeed;
