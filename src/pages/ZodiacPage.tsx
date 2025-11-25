import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { zodiacSigns } from '@/data/zodiacData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion'; // <-- added

const ZodiacPage = () => {
  const { sign } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isTeluguMode = i18n.language === 'te';

  const zodiacSign = zodiacSigns.find((z) => z.id === sign);

  if (!zodiacSign) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('zodiac.notFound')}</h1>
        <Button onClick={() => navigate('/')}>{t('zodiac.goBack')}</Button>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: isTeluguMode ? (zodiacSign.nameTe || zodiacSign.name) : zodiacSign.name,
          text: t('zodiac.shareText') || '',
          url: currentUrl,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        alert(t('zodiac.linkCopied') || 'Link copied to clipboard');
      } else {
        prompt(t('zodiac.copyPrompt') || 'Copy this link', currentUrl);
      }
    } catch (err) {
      console.error('Share failed', err);
      alert(t('zodiac.shareFailed') || 'Unable to share');
    }
  };

  // Framer Motion variants for entrance
    const photoVariants = {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { duration: 0.45 } 
      },
    };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('zodiac.back')}
          </Button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label={t('zodiac.shareAria') || 'Share zodiac'}
              className="inline-flex items-center px-3 py-2 rounded-md hover:bg-muted transition"
              type="button"
            >
              <Share2 className="mr-2 h-4 w-4" />
              <span className="text-sm">{t('zodiac.share') || 'Share'}</span>
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          {/* Animated wrapper */}
          <motion.div
            className="mb-2"
            initial="hidden"
            animate="visible"
            variants={photoVariants}
            key={zodiacSign.id} // re-run animation when user navigates between signs
            aria-hidden={false}
          >
            {zodiacSign.image ? (
              <motion.img
                src={zodiacSign.image}
                alt={
                  isTeluguMode
                    ? zodiacSign.nameTe || zodiacSign.name
                    : zodiacSign.name
                }
                className="w-32 h-32 mx-auto object-contain rounded-full"
                // subtle hover micro-interaction
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                loading="lazy"
              />
            ) : (
              <motion.div
                role="img"
                aria-label={
                  isTeluguMode
                    ? zodiacSign.nameTe || zodiacSign.name
                    : zodiacSign.name
                }
                className="w-32 h-32 mx-auto flex items-center justify-center text-6xl rounded-full bg-muted/10"
                whileHover={{ scale: 1.03 }}
              >
                <span>{zodiacSign.symbol}</span>
              </motion.div>
            )}
          </motion.div>

          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isTeluguMode ? zodiacSign.nameTe : zodiacSign.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isTeluguMode ? zodiacSign.dateRangeTe : zodiacSign.dateRange}
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('zodiac.description')}</CardTitle>
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
                {(isTeluguMode ? (zodiacSign.traitsTe ?? []) : (zodiacSign.traits ?? [])).map((trait, index) => (
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
                  {isTeluguMode ? (zodiacSign.luckyColorTe ?? zodiacSign.luckyColor) : zodiacSign.luckyColor}
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground mb-1">
                  {isTeluguMode ? 'సంఖ్య' : 'Number'}
                </p>
                <p className="text-foreground">{zodiacSign.luckyNumber ?? '-'}</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-muted-foreground mb-1">
                  {isTeluguMode ? 'గ్రహం' : 'Ruling Planet'}
                </p>
                <p className="text-foreground">
                  {isTeluguMode ? (zodiacSign.rulingPlanetTe ?? zodiacSign.rulingPlanet) : zodiacSign.rulingPlanet}
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
              {(isTeluguMode ? (zodiacSign.compatibilityTe ?? []) : (zodiacSign.compatibility ?? [])).map((comp, index) => (
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
