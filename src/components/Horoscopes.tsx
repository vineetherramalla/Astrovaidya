import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHoroscopeByPeriod } from '@/data/horoscopes';
import type { Horoscope } from '@/data/horoscopes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type HoroscopePeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';

const Horoscopes = () => {
  const { t, i18n } = useTranslation();
  const [period, setPeriod] = useState<HoroscopePeriod>('daily');
  const isTeluguMode = i18n.language === 'te';

  const currentHoroscope: Horoscope | undefined = getHoroscopeByPeriod(period);

  return (
    <section className="py-16 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {t('horoscope.title')}
          </h2>
        </div>

        <Tabs value={period} onValueChange={(v) => setPeriod(v as HoroscopePeriod)} className="w-full">
          {/* TabsList: horizontal scroll on xs, grid from sm */}
          <TabsList
            className="
              flex gap-2 overflow-x-auto pb-2 -mx-4 px-4
              sm:overflow-visible sm:-mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:gap-3
              "
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <TabsTrigger
              value="daily"
              className="tab-trigger min-w-[96px] flex-0 sm:flex-1 text-sm sm:text-base"
            >
              {t('horoscope.daily')}
            </TabsTrigger>

            <TabsTrigger
              value="weekly"
              className="tab-trigger min-w-[96px] flex-0 sm:flex-1 text-sm sm:text-base"
            >
              {t('horoscope.weekly')}
            </TabsTrigger>

            <TabsTrigger
              value="monthly"
              className="tab-trigger min-w-[96px] flex-0 sm:flex-1 text-sm sm:text-base"
            >
              {t('horoscope.monthly')}
            </TabsTrigger>

            <TabsTrigger
              value="yearly"
              className="tab-trigger min-w-[96px] flex-0 sm:flex-1 text-sm sm:text-base"
            >
              {t('horoscope.yearly')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value={period} className="mt-6">
            {currentHoroscope ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {isTeluguMode ? currentHoroscope.titleTe : currentHoroscope.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {currentHoroscope.image ? (
                    <div className="w-full overflow-hidden rounded-lg">
                      <img
                        src={currentHoroscope.image}
                        alt={isTeluguMode ? currentHoroscope.titleTe || currentHoroscope.title : currentHoroscope.title}
                        className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  <p className="text-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {isTeluguMode ? currentHoroscope.contentTe : currentHoroscope.content}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  {t('horoscope.noData')}
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
