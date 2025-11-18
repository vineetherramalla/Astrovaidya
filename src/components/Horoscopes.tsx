import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHoroscopes } from '@/utils/localStorage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type HoroscopePeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';

const Horoscopes = () => {
  const { t, i18n } = useTranslation();
  const [period, setPeriod] = useState<HoroscopePeriod>('daily');
  const horoscopes = getHoroscopes();
  const isTeluguMode = i18n.language === 'te';

  const currentHoroscope = horoscopes.find((h: any) => h.period === period);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('horoscope.title')}
          </h2>
        </div>

        <Tabs value={period} onValueChange={(v) => setPeriod(v as HoroscopePeriod)} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">{t('horoscope.daily')}</TabsTrigger>
            <TabsTrigger value="weekly">{t('horoscope.weekly')}</TabsTrigger>
            <TabsTrigger value="monthly">{t('horoscope.monthly')}</TabsTrigger>
            <TabsTrigger value="yearly">{t('horoscope.yearly')}</TabsTrigger>
          </TabsList>

          <TabsContent value={period} className="mt-6">
            {currentHoroscope ? (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {isTeluguMode ? currentHoroscope.titleTe : currentHoroscope.title}
                  </CardTitle>
                  <CardDescription>
                    {new Date(currentHoroscope.date).toLocaleDateString(isTeluguMode ? 'te-IN' : 'en-IN')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {isTeluguMode ? currentHoroscope.contentTe : currentHoroscope.content}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  No horoscope available for this period. Please check admin panel.
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Horoscopes;
