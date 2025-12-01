import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { useTranslation } from 'react-i18next';

const FAQ_IDS = [1, 2, 3, 4];

const FAQs = () => {
  const { t } = useTranslation();

  return (
    <section id="faqs" className="py-16 bg-background px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{t('faqs.title')}</h2>
          <p className="text-muted-foreground mt-2">{t('faqs.subtitle')}</p>
        </div>

        <Accordion type="single" collapsible>
          {FAQ_IDS.map((id, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>{t(`faqs.q${id}`)}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">{t(`faqs.a${id}`)}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
