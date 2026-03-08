import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n, type Lang } from "@/lib/i18n";

const faqData: { q: Record<Lang, string>; a: Record<Lang, string> }[] = [
  {
    q: { ru: "Чем JDG отличается от sp. z o.o.?", en: "What's the difference between JDG and sp. z o.o.?", pl: "Czym różni się JDG od sp. z o.o.?" },
    a: {
      ru: "JDG (jednoosobowa działalność gospodarcza) — это индивидуальная деятельность без образования юрлица. Вы несёте полную ответственность своим имуществом. Sp. z o.o. — это общество с ограниченной ответственностью, аналог ООО. Ответственность ограничена вкладом в уставный капитал (минимум 5 000 zł).",
      en: "JDG (sole proprietorship) is an individual business without forming a legal entity. You bear full liability with your personal assets. Sp. z o.o. is a limited liability company, similar to an LLC. Liability is limited to the share capital contribution (minimum 5,000 PLN).",
      pl: "JDG to jednoosobowa działalność gospodarcza — odpowiadasz całym swoim majątkiem. Sp. z o.o. to spółka z ograniczoną odpowiedzialnością — odpowiedzialność ograniczona do wkładu (minimum 5 000 zł kapitału zakładowego).",
    },
  },
  {
    q: { ru: "Нужно ли мне регистрироваться как плательщик VAT?", en: "Do I need to register as a VAT payer?", pl: "Czy muszę rejestrować się jako płatnik VAT?" },
    a: {
      ru: "Если ваш годовой оборот превышает 200 000 zł, регистрация VAT обязательна. Для некоторых видов деятельности (например, юридические услуги) регистрация VAT обязательна вне зависимости от оборота. IT-компании часто регистрируются добровольно для возврата VAT.",
      en: "If your annual turnover exceeds 200,000 PLN, VAT registration is mandatory. For some activities (e.g., legal services), VAT registration is required regardless of turnover. IT companies often register voluntarily to reclaim VAT.",
      pl: "Jeśli roczny obrót przekracza 200 000 zł, rejestracja VAT jest obowiązkowa. Dla niektórych rodzajów działalności (np. usługi prawne) rejestracja VAT jest wymagana niezależnie od obrotu. Firmy IT często rejestrują się dobrowolnie, aby odliczyć VAT.",
    },
  },
  {
    q: { ru: "Что такое KSeF и как это повлияет на мой бизнес?", en: "What is KSeF and how will it affect my business?", pl: "Czym jest KSeF i jak wpłynie na moją firmę?" },
    a: {
      ru: "KSeF (Krajowy System e-Faktur) — это государственная система электронных счетов-фактур в Польше. Она станет обязательной для всех предпринимателей. Все счета будут выставляться через единую платформу. Мы поможем вам подготовиться и интегрировать KSeF в вашу бухгалтерию.",
      en: "KSeF (National e-Invoice System) is Poland's government electronic invoice system. It will become mandatory for all entrepreneurs. All invoices will be issued through a unified platform. We'll help you prepare and integrate KSeF into your accounting.",
      pl: "KSeF (Krajowy System e-Faktur) to państwowy system fakturowania elektronicznego. Stanie się obowiązkowy dla wszystkich przedsiębiorców. Wszystkie faktury będą wystawiane przez jedną platformę. Pomożemy Ci przygotować się i zintegrować KSeF z księgowością.",
    },
  },
  {
    q: { ru: "Какие документы нужны для начала сотрудничества?", en: "What documents are needed to start working together?", pl: "Jakie dokumenty są potrzebne do rozpoczęcia współpracy?" },
    a: {
      ru: "Для начала работы нам потребуются: регистрационные документы компании (NIP, REGON, KRS/CEIDG), доверенность на представление интересов перед налоговыми органами, доступ к банковскому счёту (выписки). Все документы можно передать электронно.",
      en: "To get started, we need: company registration documents (NIP, REGON, KRS/CEIDG), power of attorney for representing your interests before tax authorities, access to bank account (statements). All documents can be submitted electronically.",
      pl: "Do rozpoczęcia pracy potrzebujemy: dokumenty rejestracyjne firmy (NIP, REGON, KRS/CEIDG), pełnomocnictwo do reprezentowania przed organami podatkowymi, dostęp do konta bankowego (wyciągi). Wszystkie dokumenty można przesłać elektronicznie.",
    },
  },
  {
    q: { ru: "Можно ли перейти к вам от другого бухгалтера?", en: "Can I switch from another accountant?", pl: "Czy mogę przejść od innego księgowego?" },
    a: {
      ru: "Да, смена бухгалтера — стандартная процедура. Мы поможем организовать передачу документации от предыдущего бюро, проверим состояние вашей бухгалтерии и обеспечим плавный переход без потери данных.",
      en: "Yes, switching accountants is a standard procedure. We'll help organize the transfer of documentation from your previous firm, review the state of your accounting, and ensure a smooth transition without data loss.",
      pl: "Tak, zmiana księgowego to standardowa procedura. Pomożemy zorganizować przekazanie dokumentacji od poprzedniego biura, sprawdzimy stan księgowości i zapewnimy płynne przejście bez utraty danych.",
    },
  },
  {
    q: { ru: "Как передавать документы?", en: "How do I submit documents?", pl: "Jak przesyłać dokumenty?" },
    a: {
      ru: "Документы можно передавать удобным способом: по e-mail, через Telegram, Google Drive или другой облачный сервис. Принимаем фотографии, сканы и электронные файлы. Отчётность предоставляется ежемесячно.",
      en: "You can submit documents in any convenient way: by email, via Telegram, Google Drive, or other cloud services. We accept photos, scans, and electronic files. Reports are provided monthly.",
      pl: "Dokumenty można przesyłać w wygodny sposób: e-mailem, przez Telegram, Google Drive lub inny serwis chmurowy. Przyjmujemy zdjęcia, skany i pliki elektroniczne. Raporty są dostarczane co miesiąc.",
    },
  },
];

const FAQ = () => {
  const { t, lang } = useI18n();

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <div className="gold-line w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("faq.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("faq.desc")}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-sm font-semibold text-foreground text-left hover:no-underline">
                  {item.q[lang]}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.a[lang]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
