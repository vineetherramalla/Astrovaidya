// Horoscope data stored in code
// This data is read-only and should be updated directly in this file

export interface Horoscope {
  id: number;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  title: string;
  titleTe: string;
  image: string;
  content: string;
  contentTe: string;
}

export const horoscopes: Horoscope[] = [
  {
    id: 1,
    period: 'daily',
    title: 'Daily Horoscope',
    titleTe: 'రోజువారీ రాశిఫలం',
    image: '/Daily.jpg',
    content: `Daily horoscopes are brief astrological forecasts that offer insights into what the day might hold for individuals based on their zodiac signs. They typically cover various aspects of life such as love, career, health, and finances, providing a general overview of the energies influencing each sign. These forecasts are based on the positions of celestial bodies at the time of ones birth and the principles of astrology. People often read their daily horoscope to gain a sense of guidance or understanding about the opportunities and challenges they may encounter throughout the day.

Benefits of Daily Horoscope

A horoscope is a forecast of a person's future based on the positions of celestial bodies (such as planets and stars) at a specific time, usually the time of their birth. It is commonly associated with astrology and is used to provide insights into various aspects of life, including personality traits, relationships, and potential future events. Horoscopes are often divided into twelve astrological signs, each representing different periods of the year. People often read horoscopes to gain a better understanding of themselves or to get predictions about their future.
Reading a daily horoscope can offer several potential benefits:

Guidance: Horoscopes can provide guidance and insight into the potential opportunities and challenges that may arise in your day. They might offer suggestions on how to navigate certain situations or make decisions.

Self-reflection: Daily horoscopes can encourage self-reflection by prompting you to consider how the astrological predictions relate to your own life experiences and feelings.

Awareness: Horoscopes can help you become more aware of astrological influences and how they may impact your mood, behavior, or interactions with others.

Entertainment: For many people, reading their daily horoscope is simply a form of entertainment or a fun ritual to start their day.

Validation: Sometimes, reading your horoscope can provide validation for what you're currently experiencing or feeling. It can reassure you that others might be going through similar situations.`,
    contentTe: `రోజువారీ జాతకచక్రాలు అనేవి సంక్షిప్త జ్యోతిషశాస్త్ర సూచనలు, ఇవి వ్యక్తుల రాశిచక్ర గుర్తుల ఆధారంగా ఆ రోజు వారికి ఎలాంటి భవిష్యత్తు ఉంటుందో తెలియజేస్తాయి. ఇవి సాధారణంగా ప్రేమ, వృత్తి, ఆరోగ్యం మరియు ఆర్థికం వంటి జీవితంలోని వివిధ అంశాలను కవర్ చేస్తాయి, ప్రతి రాశిని ప్రభావితం చేసే శక్తుల సాధారణ అవలోకనాన్ని అందిస్తాయి. ఈ అంచనాలు ఒకరి జనన సమయంలో ఖగోళ వస్తువుల స్థానాలు మరియు జ్యోతిషశాస్త్ర సూత్రాలపై ఆధారపడి ఉంటాయి. ప్రజలు తరచుగా తమ రోజువారీ జాతకచక్రాన్ని చదువుతారు, తద్వారా వారు రోజంతా ఎదుర్కొనే అవకాశాలు మరియు సవాళ్ల గురించి మార్గదర్శకత్వం లేదా అవగాహన పొందుతారు.
    
    రోజువారీ జాతకం యొక్క ప్రయోజనాలు
    
    జాతకం అనేది ఒక నిర్దిష్ట సమయంలో, సాధారణంగా వారి జన్మ సమయం వద్ద ఖగోళ వస్తువుల (గ్రహాలు మరియు నక్షత్రాలు వంటివి) స్థానాల ఆధారంగా ఒక వ్యక్తి భవిష్యత్తును అంచనా వేస్తుంది. ఇది సాధారణంగా జ్యోతిషశాస్త్రంతో ముడిపడి ఉంటుంది మరియు వ్యక్తిత్వ లక్షణాలు, సంబంధాలు మరియు సంభావ్య భవిష్యత్తు సంఘటనలతో సహా జీవితంలోని వివిధ అంశాలపై అంతర్దృష్టులను అందించడానికి ఉపయోగించబడుతుంది. జాతకాలను తరచుగా పన్నెండు జ్యోతిషశాస్త్ర రాశులుగా విభజించారు, ప్రతి ఒక్కటి సంవత్సరంలోని వివిధ కాలాలను సూచిస్తుంది. ప్రజలు తమను తాము బాగా అర్థం చేసుకోవడానికి లేదా వారి భవిష్యత్తు గురించి అంచనాలను పొందడానికి తరచుగా జాతకాలను చదువుతారు.
రోజువారీ జాతకాన్ని చదవడం వల్ల అనేక సంభావ్య ప్రయోజనాలు లభిస్తాయి:

మార్గదర్శకత్వం: మీ రోజులో తలెత్తే అవకాశాలు మరియు సవాళ్లకు జాతకాలు మార్గదర్శకత్వం మరియు అంతర్దృష్టిని అందించగలవు. కొన్ని పరిస్థితులను ఎలా నావిగేట్ చేయాలో లేదా నిర్ణయాలు తీసుకోవాలో వారు సూచనలను అందించవచ్చు.

స్వీయ-ప్రతిబింబం: రోజువారీ జాతకాలు జ్యోతిషశాస్త్ర అంచనాలు మీ స్వంత జీవిత అనుభవాలు మరియు భావాలకు ఎలా సంబంధం కలిగి ఉన్నాయో పరిశీలించమని మిమ్మల్ని ప్రేరేపించడం ద్వారా స్వీయ-ప్రతిబింబాన్ని ప్రోత్సహిస్తాయి.

అవగాహన: జ్యోతిషశాస్త్ర ప్రభావాల గురించి మరియు అవి మీ మానసిక స్థితి, ప్రవర్తన లేదా ఇతరులతో పరస్పర చర్యలను ఎలా ప్రభావితం చేస్తాయో మరింత తెలుసుకోవడానికి జాతకాలు మీకు సహాయపడతాయి.

వినోదం: చాలా మందికి, వారి రోజువారీ జాతకాన్ని చదవడం కేవలం ఒక రకమైన వినోదం లేదా వారి రోజును ప్రారంభించడానికి ఒక ఆహ్లాదకరమైన ఆచారం.

ధ్రువీకరణ: కొన్నిసార్లు, మీ జాతకాన్ని చదవడం మీరు ప్రస్తుతం అనుభవిస్తున్న లేదా అనుభూతి చెందుతున్న దానికి ధ్రువీకరణను అందిస్తుంది. ఇతరులు ఇలాంటి పరిస్థితులను ఎదుర్కొంటున్నారని ఇది మీకు భరోసా ఇస్తుంది.`,
  },
  {
    id: 2,
    period: 'weekly',
    title: 'Weekly Horoscope',
    titleTe: 'వారపు రాశిఫలం',
    image: '/Weekly.jpg',
    content: `Weekly horoscopes are typically prepared by astrologers who analyze the movements and positions of celestial bodies such as planets and stars in relation to the zodiac signs. Astrologers consider factors such as the current planetary transits, aspects between planets, and the overall astrological climate to provide insights into the upcoming week for each zodiac sign. The process involves interpreting how these astrological influences might impact different areas of life such as love, career, relationships, and health for individuals born under each zodiac sign. Astrologers use their knowledge of astrology, symbolism, and intuition to craft the weekly horoscope forecasts tailored to the characteristics and tendencies associated with each zodiac sign.

             While some astrologers rely solely on traditional astrological techniques, others may incorporate modern interpretations or additional elements such as Tarot cards or planetary movements in their forecasting process. Ultimately, the preparation of a weekly horoscope involves a combination of astrological expertise, intuition, and an understanding of current astrological trends.
             
             Benefits of Weekly Horoscope
Weekly horoscope predictions are based on constellation of star, planetary transits and movements as per astrology. This constellation is then deciphered and interpreted by esteemed astrologers to give you the best & near accurate predictions / guidance for the week.Reading weekly horoscope can help us in guiding our actions throughout the week.

A horoscope is a forecast of a person's future based on the positions of celestial bodies (such as planets and stars) at a specific time, usually the time of their birth. It is commonly associated with astrology and is used to provide insights into various aspects of life, including personality traits, relationships, and potential future events. Horoscopes are often divided into twelve astrological signs, each representing different periods of the year. People often read horoscopes to gain a better understanding of themselves or to get predictions about their future.

Weekly horoscopes provide a brief astrological forecast for a specific time frame—usually a week. Here's how they can be perceived to help:

Guidance: Weekly horoscopes can offer guidance on potential opportunities and challenges in the upcoming week, allowing individuals to make informed decisions.
Awareness: By reading a weekly horoscope, people might become more aware of their emotions, reactions, and the influences of celestial bodies. This self-awareness can contribute to personal growth.
Preparation: Forewarned is forearmed. Knowing about potential challenges in advance can help individuals prepare mentally and emotionally, making it easier to navigate situations.
Reflection: Horoscopes often encourage reflection on personal goals, relationships, and life choices. This introspection can be valuable for individuals seeking to align their actions with their aspirations.`,
    contentTe: `వారపు జాతకాలను సాధారణంగా జ్యోతిష్కులు రాశిచక్ర గుర్తులకు సంబంధించి గ్రహాలు మరియు నక్షత్రాలు వంటి ఖగోళ వస్తువుల కదలికలు మరియు స్థానాలను విశ్లేషిస్తారు. ప్రతి రాశిచక్రం కోసం రాబోయే వారం గురించి అంతర్దృష్టులను అందించడానికి జ్యోతిష్కులు ప్రస్తుత గ్రహాల సంచారాలు, గ్రహాల మధ్య అంశాలు మరియు మొత్తం జ్యోతిష వాతావరణం వంటి అంశాలను పరిగణనలోకి తీసుకుంటారు. ఈ ప్రక్రియలో ఈ జ్యోతిష ప్రభావాలు ప్రతి రాశి కింద జన్మించిన వ్యక్తుల ప్రేమ, వృత్తి, సంబంధాలు మరియు ఆరోగ్యం వంటి జీవితంలోని వివిధ రంగాలను ఎలా ప్రభావితం చేస్తాయో అర్థం చేసుకోవడం ఉంటుంది. జ్యోతిష్కులు ప్రతి రాశిచక్రం గుర్తుతో సంబంధం ఉన్న లక్షణాలు మరియు ధోరణులకు అనుగుణంగా వారపు జాతక సూచనలను రూపొందించడానికి జ్యోతిషశాస్త్రం, ప్రతీకవాదం మరియు అంతర్ దృష్టిపై వారి జ్ఞానాన్ని ఉపయోగిస్తారు.

కొంతమంది జ్యోతిష్కులు సాంప్రదాయ జ్యోతిష పద్ధతులపై మాత్రమే ఆధారపడగా, మరికొందరు ఆధునిక వివరణలు లేదా టారో కార్డులు లేదా గ్రహాల కదలికలు వంటి అదనపు అంశాలను వారి అంచనా ప్రక్రియలో చేర్చవచ్చు. అంతిమంగా, వారపు జాతకాన్ని తయారు చేయడంలో జ్యోతిషశాస్త్ర నైపుణ్యం, అంతర్ దృష్టి మరియు ప్రస్తుత జ్యోతిషశాస్త్ర ధోరణుల అవగాహన కలయిక ఉంటుంది.

వారపు జాతకచక్రం యొక్క ప్రయోజనాలు
వారపు జాతకచక్ర అంచనాలు నక్షత్రాల నక్షత్ర సముదాయం, గ్రహాల గమనం మరియు జ్యోతిషశాస్త్రం ప్రకారం కదలికల ఆధారంగా ఉంటాయి. ఈ రాశిని గౌరవనీయ జ్యోతిష్కులు అర్థంచేసుకుని, వారానికి ఉత్తమమైన & దాదాపు ఖచ్చితమైన అంచనాలు / మార్గదర్శకత్వం అందించడానికి వివరిస్తారు. వారపు జాతకచక్రం చదవడం వారమంతా మన చర్యలకు మార్గనిర్దేశం చేయడంలో సహాయపడుతుంది.

జాతకం అనేది ఒక నిర్దిష్ట సమయంలో, సాధారణంగా వారి పుట్టిన సమయంలో ఖగోళ వస్తువుల (గ్రహాలు మరియు నక్షత్రాలు వంటివి) స్థానాల ఆధారంగా ఒక వ్యక్తి యొక్క భవిష్యత్తును అంచనా వేస్తుంది. ఇది సాధారణంగా జ్యోతిషశాస్త్రంతో ముడిపడి ఉంటుంది మరియు వ్యక్తిత్వ లక్షణాలు, సంబంధాలు మరియు సంభావ్య భవిష్యత్తు సంఘటనలతో సహా జీవితంలోని వివిధ అంశాలపై అంతర్దృష్టులను అందించడానికి ఉపయోగించబడుతుంది. జాతకచక్రాలను తరచుగా పన్నెండు జ్యోతిషశాస్త్ర రాశులుగా విభజించారు, ప్రతి ఒక్కటి సంవత్సరంలో వేర్వేరు కాలాలను సూచిస్తుంది. ప్రజలు తమను తాము బాగా అర్థం చేసుకోవడానికి లేదా వారి భవిష్యత్తు గురించి అంచనాలను పొందడానికి తరచుగా జాతకచక్రాలను చదువుతారు.

వారపు జాతకాలు ఒక నిర్దిష్ట కాలానికి - సాధారణంగా ఒక వారానికి - సంక్షిప్త జ్యోతిషశాస్త్ర సూచనను అందిస్తాయి. వాటిని ఎలా సహాయపడతాయో ఇక్కడ ఉంది:

మార్గదర్శకత్వం: వారపు జాతకాలు రాబోయే వారంలో సంభావ్య అవకాశాలు మరియు సవాళ్లపై మార్గదర్శకత్వాన్ని అందిస్తాయి, వ్యక్తులు సమాచారంతో కూడిన నిర్ణయాలు తీసుకోవడానికి వీలు కల్పిస్తాయి.
అవగాహన: వారపు జాతకాన్ని చదవడం ద్వారా, ప్రజలు తమ భావోద్వేగాలు, ప్రతిచర్యలు మరియు ఖగోళ వస్తువుల ప్రభావాల గురించి మరింత అవగాహన కలిగి ఉండవచ్చు. ఈ స్వీయ-అవగాహన వ్యక్తిగత వృద్ధికి దోహదపడుతుంది.
తయారీ: ముందస్తుగా హెచ్చరించబడింది. సంభావ్య సవాళ్ల గురించి ముందుగానే తెలుసుకోవడం వ్యక్తులు మానసికంగా మరియు భావోద్వేగపరంగా సిద్ధం కావడానికి సహాయపడుతుంది, పరిస్థితులను నావిగేట్ చేయడం సులభం చేస్తుంది.
ప్రతిబింబం: జాతకాలు తరచుగా వ్యక్తిగత లక్ష్యాలు, సంబంధాలు మరియు జీవిత ఎంపికలపై ప్రతిబింబాన్ని ప్రోత్సహిస్తాయి. వారి చర్యలను వారి ఆకాంక్షలతో సమలేఖనం చేసుకోవాలనుకునే వ్యక్తులకు ఈ ఆత్మపరిశీలన విలువైనదిగా ఉంటుంది.`,
  },
  {
    id: 3,
    period: 'monthly',
    title: 'Monthly Horoscope',
    titleTe: 'నెలవారీ రాశిఫలం',
    image: '/Monthly.jpg',
    content: `Reading your Monthly horoscope is one of the best ways to predict your future. The foretelling of the future through the monthly horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more. However, it's predominantly the movement of planets from one house of the Kundli to another that influences the life of the native and thus his Daily horoscope. As planets are in motion, their position in the chart of the native on a daily basis virtually decides the course of his life and fortune.

Of all the ancient Vedic practices that we are aware of, horoscope reading is one of the most accepted and popular. Horoscope reading transgresses boundaries and is a tea-time read for not just the astrology-loving Indians but also people residing in western countries. In fact, these days there are numerous mediums to bring you your Weekly Horoscopes, such as TV, newspapers, magazines, and much more. Whatever the medium, the purpose of the Daily horoscope remains the same, which is to prepare you for life and make you aware of all the upcoming events, so you don't go blank into life as most people do.

Benefits of Monthly Horoscope
A horoscope is a forecast of a person's future based on the positions of celestial bodies (such as planets and stars) at a specific time, usually the time of their birth. It is commonly associated with astrology and is used to provide insights into various aspects of life, including personality traits, relationships, and potential future events. Horoscopes are often divided into twelve astrological signs, each representing different periods of the year. People often read horoscopes to gain a better understanding of themselves or to get predictions about their future.

Monthly horoscopes offer a broader perspective compared to weekly ones, covering a larger span of time. Here are ways in which monthly horoscopes can be perceived to help:

Long-Term Planning: Monthly horoscopes can provide insights into trends and themes that may unfold over the course of a month. This can aid in making long-term plans or setting goals.
Emotional Preparation: By understanding potential emotional influences and challenges for the month ahead, individuals can emotionally prepare themselves for what might come, fostering resilience.
Relationship Insights: Monthly horoscopes often touch upon relationship dynamics. This insight can be valuable for improving communication or understanding potential challenges in personal and professional relationships.
Personal Growth: The monthly forecast may highlight opportunities for personal growth or areas where individuals can focus their energy for self-improvement.
Timing of Events: Astrological interpretations in monthly horoscopes might suggest auspicious or challenging periods for certain activities. This information can guide the timing of important decisions or actions.`,
    contentTe: `మీ నెలవారీ జాతకాన్ని చదవడం మీ భవిష్యత్తును అంచనా వేయడానికి ఉత్తమ మార్గాలలో ఒకటి. నెలవారీ జాతకాన్ని ఉపయోగించి భవిష్యత్తును అంచనా వేయడం ఒక పురాతన ఆచారం మరియు నేటికీ సంబంధితంగా ఉంది. గ్రహాల స్థానం, నక్షత్రాలు, తిథి మరియు మరిన్ని వంటి వివిధ జ్యోతిషశాస్త్ర అంశాల ఆధారంగా వ్యక్తి భవిష్యత్తును అంచనా వేయడం జాతక అంచనా. అయితే, ప్రధానంగా కుండలిలోని ఒక ఇంటి నుండి మరొక ఇంటికి గ్రహాల కదలిక స్థానికుడి జీవితాన్ని ప్రభావితం చేస్తుంది మరియు తద్వారా అతని రోజువారీ జాతకాన్ని ప్రభావితం చేస్తుంది. గ్రహాలు కదలికలో ఉన్నందున, రోజువారీగా స్థానికుడి చార్టులో వాటి స్థానం అతని జీవితం మరియు అదృష్టాన్ని వాస్తవంగా నిర్ణయిస్తుంది.

మనకు తెలిసిన అన్ని పురాతన వేద పద్ధతులలో, జాతక పఠనం అత్యంత ఆమోదయోగ్యమైన మరియు ప్రజాదరణ పొందిన వాటిలో ఒకటి. జాతక పఠనం సరిహద్దులను దాటుతుంది మరియు జ్యోతిషశాస్త్రాన్ని ఇష్టపడే భారతీయులకు మాత్రమే కాకుండా పాశ్చాత్య దేశాలలో నివసించే ప్రజలకు కూడా టీ-టైమ్ పఠనం. వాస్తవానికి, ఈ రోజుల్లో టీవీ, వార్తాపత్రికలు, మ్యాగజైన్‌లు మరియు మరిన్ని వంటి మీ వారపు జాతకాలను మీకు అందించడానికి అనేక మాధ్యమాలు ఉన్నాయి. మాధ్యమం ఏదైనా, డైలీ జాతకం యొక్క ఉద్దేశ్యం అలాగే ఉంటుంది, అంటే మిమ్మల్ని జీవితానికి సిద్ధం చేయడం మరియు రాబోయే అన్ని సంఘటనల గురించి మీకు అవగాహన కల్పించడం, కాబట్టి చాలా మంది చేసినట్లుగా మీరు జీవితంలోకి ఖాళీగా వెళ్లరు.

నెలవారీ జాతకచక్రం యొక్క ప్రయోజనాలు
జాతకం అనేది ఒక నిర్దిష్ట సమయంలో, సాధారణంగా వారి జన్మ సమయం వద్ద ఖగోళ వస్తువుల (గ్రహాలు మరియు నక్షత్రాలు వంటివి) స్థానాల ఆధారంగా ఒక వ్యక్తి భవిష్యత్తును అంచనా వేస్తుంది. ఇది సాధారణంగా జ్యోతిషశాస్త్రంతో ముడిపడి ఉంటుంది మరియు వ్యక్తిత్వ లక్షణాలు, సంబంధాలు మరియు సంభావ్య భవిష్యత్తు సంఘటనలతో సహా జీవితంలోని వివిధ అంశాలపై అంతర్దృష్టులను అందించడానికి ఉపయోగించబడుతుంది. జాతకచక్రాలను తరచుగా పన్నెండు జ్యోతిషశాస్త్ర రాశులుగా విభజించారు, ప్రతి ఒక్కటి సంవత్సరంలోని వివిధ కాలాలను సూచిస్తుంది. ప్రజలు తమను తాము బాగా అర్థం చేసుకోవడానికి లేదా వారి భవిష్యత్తు గురించి అంచనాలను పొందడానికి తరచుగా జాతకచక్రాలను చదువుతారు.

నెలవారీ జాతకాలు వారపు వాటితో పోలిస్తే విస్తృత దృక్పథాన్ని అందిస్తాయి, ఇవి ఎక్కువ సమయాన్ని కవర్ చేస్తాయి. నెలవారీ జాతకచక్రాలను గ్రహించడానికి సహాయపడే మార్గాలు ఇక్కడ ఉన్నాయి:

దీర్ఘకాలిక ప్రణాళిక: నెలవారీ జాతకాలు ఒక నెల వ్యవధిలో జరిగే ట్రెండ్‌లు మరియు ఇతివృత్తాల గురించి అంతర్దృష్టులను అందించగలవు. ఇది దీర్ఘకాలిక ప్రణాళికలను రూపొందించడంలో లేదా లక్ష్యాలను నిర్దేశించడంలో సహాయపడుతుంది.
భావోద్వేగ తయారీ: రాబోయే నెలలో సంభావ్య భావోద్వేగ ప్రభావాలు మరియు సవాళ్లను అర్థం చేసుకోవడం ద్వారా, వ్యక్తులు రాబోయే వాటికి మానసికంగా తమను తాము సిద్ధం చేసుకోవచ్చు, స్థితిస్థాపకతను పెంపొందించుకోవచ్చు.
సంబంధాల అంతర్దృష్టులు: నెలవారీ జాతకాలు తరచుగా సంబంధాల డైనమిక్స్‌పై ప్రభావం చూపుతాయి. ఈ అంతర్దృష్టి కమ్యూనికేషన్‌ను మెరుగుపరచడానికి లేదా వ్యక్తిగత మరియు వృత్తిపరమైన సంబంధాలలో సంభావ్య సవాళ్లను అర్థం చేసుకోవడానికి విలువైనదిగా ఉంటుంది.
వ్యక్తిగత వృద్ధి: నెలవారీ సూచన వ్యక్తిగత వృద్ధికి అవకాశాలను లేదా వ్యక్తులు స్వీయ-అభివృద్ధి కోసం తమ శక్తిని కేంద్రీకరించగల ప్రాంతాలను హైలైట్ చేయవచ్చు.
సంఘటనల సమయం: నెలవారీ జాతకాలలో జ్యోతిష వివరణలు కొన్ని కార్యకలాపాలకు శుభప్రదమైన లేదా సవాలుతో కూడిన కాలాలను సూచించవచ్చు. ఈ సమాచారం ముఖ్యమైన నిర్ణయాలు లేదా చర్యల సమయానికి మార్గనిర్దేశం చేస్తుంది.`,
  },
  {
    id: 4,
    period: 'yearly',
    title: 'Yearly Horoscope 2025',
    titleTe: 'సంవత్సరపు రాశిఫలం 2025',
    image: '/Yearly.jpg',
    content: `A horoscope is a forecast of a person's future based on the positions of celestial bodies (such as planets and stars) at a specific time, usually the time of their birth. It is commonly associated with astrology and is used to provide insights into various aspects of life, including personality traits, relationships, and potential future events. Horoscopes are often divided into twelve astrological signs, each representing different periods of the year. People often read horoscopes to gain a better understanding of themselves or to get predictions about their future.

Yearly horoscopes provide a broad overview of the astrological influences and trends for an entire year. Here's how they can be perceived to help:

Long-Term Planning: Yearly horoscopes offer a glimpse into overarching themes and major trends. This can be useful for making strategic plans and setting goals for the year ahead.
Life Transitions: For those experiencing major life transitions or milestones, a yearly horoscope may provide insights into the potential challenges and opportunities associated with those changes.
Personal Reflection: Yearly horoscopes often encourage introspection and reflection on personal goals, relationships, and life choices over a more extended period. This reflection can guide individuals in aligning their actions with their aspirations.
Timing of Major Decisions: Understanding astrological influences for the year can help in timing major decisions or events, considering auspicious periods and potential challenges.
Career Guidance: Yearly horoscopes may touch upon career prospects and opportunities. This information can be beneficial for those seeking guidance on professional development and work-related decisions.`,
    contentTe: `జాతకం అనేది ఒక నిర్దిష్ట సమయంలో, సాధారణంగా వారి జన్మ సమయం వద్ద ఖగోళ వస్తువుల (గ్రహాలు మరియు నక్షత్రాలు వంటివి) స్థానాల ఆధారంగా ఒక వ్యక్తి భవిష్యత్తును అంచనా వేస్తుంది. ఇది సాధారణంగా జ్యోతిషశాస్త్రంతో ముడిపడి ఉంటుంది మరియు వ్యక్తిత్వ లక్షణాలు, సంబంధాలు మరియు సంభావ్య భవిష్యత్తు సంఘటనలతో సహా జీవితంలోని వివిధ అంశాలపై అంతర్దృష్టులను అందించడానికి ఉపయోగించబడుతుంది. జాతకాలను తరచుగా పన్నెండు జ్యోతిషశాస్త్ర రాశులుగా విభజించారు, ప్రతి ఒక్కటి సంవత్సరంలోని వివిధ కాలాలను సూచిస్తుంది. ప్రజలు తమను తాము బాగా అర్థం చేసుకోవడానికి లేదా వారి భవిష్యత్తు గురించి అంచనాలను పొందడానికి తరచుగా జాతకాలను చదువుతారు.

వార్షిక జాతకాలు ఒక సంవత్సరం మొత్తం జ్యోతిషశాస్త్ర ప్రభావాలు మరియు ధోరణుల యొక్క విస్తృత అవలోకనాన్ని అందిస్తాయి. వాటిని ఎలా గ్రహించవచ్చో ఇక్కడ ఉంది:

దీర్ఘకాలిక ప్రణాళిక: వార్షిక జాతకాలు విస్తృతమైన ఇతివృత్తాలు మరియు ప్రధాన ధోరణుల సంగ్రహావలోకనం అందిస్తాయి. ఇది వ్యూహాత్మక ప్రణాళికలను రూపొందించడానికి మరియు రాబోయే సంవత్సరానికి లక్ష్యాలను నిర్దేశించడానికి ఉపయోగపడుతుంది.
జీవిత పరివర్తనాలు: జీవితంలో ప్రధాన పరివర్తనలు లేదా మైలురాళ్లను ఎదుర్కొంటున్న వారికి, వార్షిక జాతకం ఆ మార్పులతో ముడిపడి ఉన్న సంభావ్య సవాళ్లు మరియు అవకాశాల గురించి అంతర్దృష్టులను అందించవచ్చు.
వ్యక్తిగత ప్రతిబింబం: వార్షిక జాతకాలు తరచుగా వ్యక్తిగత లక్ష్యాలు, సంబంధాలు మరియు జీవిత ఎంపికలపై ఆత్మపరిశీలన మరియు ప్రతిబింబాన్ని ప్రోత్సహిస్తాయి. ఈ ప్రతిబింబం వ్యక్తులు వారి చర్యలను వారి ఆకాంక్షలతో సమలేఖనం చేయడంలో మార్గనిర్దేశం చేస్తుంది.
ప్రధాన నిర్ణయాల సమయం: సంవత్సరానికి జ్యోతిషశాస్త్ర ప్రభావాలను అర్థం చేసుకోవడం శుభప్రదమైన కాలాలు మరియు సంభావ్య సవాళ్లను పరిగణనలోకి తీసుకుని ప్రధాన నిర్ణయాలు లేదా సంఘటనలను సమయానికి తీసుకోవడంలో సహాయపడుతుంది.
కెరీర్ మార్గదర్శకత్వం: వార్షిక జాతకాలు కెరీర్ అవకాశాలు మరియు అవకాశాలను ప్రభావితం చేయవచ్చు. వృత్తిపరమైన అభివృద్ధి మరియు పని సంబంధిత నిర్ణయాలపై మార్గదర్శకత్వం కోరుకునే వారికి ఈ సమాచారం ప్రయోజనకరంగా ఉంటుంది.`,
  },
];

// Helper function to get horoscope by period
export const getHoroscopeByPeriod = (period: 'daily' | 'weekly' | 'monthly' | 'yearly'): Horoscope | undefined => {
  return horoscopes.find(h => h.period === period);
};

// Helper function to get all horoscopes
export const getAllHoroscopes = (): Horoscope[] => {
  return horoscopes;
};