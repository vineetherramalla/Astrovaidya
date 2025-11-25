import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { zodiacSigns } from '@/data/zodiacData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ZodiacSigns = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isTeluguMode = i18n.language === 'te';

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('zodiac.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('zodiac.subtitle')}
          </p>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {zodiacSigns.map((sign) => (
            <Card
              key={sign.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate(`/zodiac/${sign.id}`)}
            >
              <CardHeader className="text-center">

                {/* Image OR symbol */}
                <div className="mb-2">
                  {sign.image ? (
                    <img
                      src={sign.image}
                      alt={sign.name}
                      className="w-30 h-30 mx-auto object-contain"
                    />
                  ) : (
                    <div className="text-6xl">{sign.symbol}</div>
                  )}
                </div>

                <CardTitle className="text-lg">
                  {isTeluguMode ? sign.nameTe : sign.name}
                </CardTitle>

                <CardDescription className="text-sm">
                  {isTeluguMode ? sign.dateRangeTe : sign.dateRange}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  {isTeluguMode ? sign.elementTe : sign.element}
                </p>
              </CardContent>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ZodiacSigns;
