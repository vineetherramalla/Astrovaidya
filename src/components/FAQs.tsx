import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

const faqs = [
  {
    q: 'How do I book a consultation?',
    a: 'Use the "Book This Service" button on the service detail modal or email us at hello@cosmicinsights.com to request an appointment.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers and UPI. Payment details will be shared after you request a booking.'
  },
  {
    q: 'Can I get a refund if I am not satisfied?',
    a: 'Refunds are evaluated on a case-by-case basis. Please contact us within 7 days of the consultation.'
  },
  {
    q: 'Do you offer remote consultations?',
    a: 'Yes — consultations are available via phone, email, or video call.'
  }
];

const FAQs = () => {
  return (
    <section id="faqs" className="py-16 bg-background px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">Answers to common questions about our services</p>
        </div>

        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
