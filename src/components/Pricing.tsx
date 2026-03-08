import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "JDG Базовый",
    price: "от 300",
    currency: "zł/мес",
    features: [
      "Книга доходов и расходов",
      "Декларации ZUS",
      "Ежемесячная отчётность",
      "Консультации по e-mail",
    ],
  },
  {
    name: "JDG + VAT",
    price: "от 500",
    currency: "zł/мес",
    popular: true,
    features: [
      "Всё из пакета Базовый",
      "Регистрация и декларации VAT",
      "JPK_V7",
      "Приоритетная поддержка",
    ],
  },
  {
    name: "Sp. z o.o.",
    price: "от 1 200",
    currency: "zł/мес",
    features: [
      "Полная бухгалтерия",
      "CIT, VAT, JPK",
      "Годовая отчётность",
      "Кадры и зарплаты",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Цены</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Прозрачное ценообразование. Стоимость зависит от количества документов и сложности операций.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-xl border ${
                p.popular
                  ? "border-accent bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Популярный
                </span>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${p.popular ? "" : "text-foreground"}`}>
                {p.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-heading font-bold">{p.price}</span>
                <span className={`text-sm ml-1 ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>
                  {p.currency}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.popular ? "text-accent" : "text-primary"}`} />
                    <span className={p.popular ? "opacity-90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-md text-sm font-semibold transition-colors ${
                  p.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Оставить заявку
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
