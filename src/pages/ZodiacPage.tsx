import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { zodiacSigns } from '@/data/zodiacData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const ZodiacPage = () => {
  const { sign } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isTeluguMode = i18n.language === 'te';

  const zodiacSign = zodiacSigns.find((z) => z.id === sign);

  if (!zodiacSign) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Zodiac sign not found</h1>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('zodiac.back')}
        </Button>

        <div className="text-center mb-12">
          <div className="text-8xl mb-4">{zodiacSign.symbol}</div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isTeluguMode ? zodiacSign.nameTe : zodiacSign.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isTeluguMode ? zodiacSign.dateRangeTe : zodiacSign.dateRange}
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {isTeluguMode ? 'వివరణ' : 'Description'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {isTeluguMode ? zodiacSign.descriptionTe : zodiacSign.description}
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('zodiac.traits')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(isTeluguMode ? zodiacSign.traitsTe : zodiacSign.traits).map((trait, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    {trait}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('zodiac.lucky')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-sm text-muted-foreground mb-1">
                  {isTeluguMode ? 'రంగు' : 'Color'}
                </p>
                <p className="text-foreground">
                  {isTeluguMode ? zodiacSign.luckyColorTe : zodiacSign.luckyColor}
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground mb-1">
                  {isTeluguMode ? 'సంఖ్య' : 'Number'}
                </p>
                <p className="text-foreground">{zodiacSign.luckyNumber}</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground mb-1">
                  {isTeluguMode ? 'గ్రహం' : 'Ruling Planet'}
                </p>
                <p className="text-foreground">
                  {isTeluguMode ? zodiacSign.rulingPlanetTe : zodiacSign.rulingPlanet}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('zodiac.compatibility')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {(isTeluguMode ? zodiacSign.compatibilityTe : zodiacSign.compatibility).map((comp, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {comp}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ZodiacPage;
