import { motion } from "framer-motion";
import { BookOpen, Building2, Users, FileText, Briefcase } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Бухгалтерия JDG",
    desc: "Полное ведение бухгалтерии для индивидуальных предпринимателей. Книга доходов и расходов, stawka ryczałtowa.",
  },
  {
    icon: Building2,
    title: "Бухгалтерия sp. z o.o.",
    desc: "Полная бухгалтерия для компаний, включая KPiR, CIT, VAT, годовую отчётность.",
  },
  {
    icon: Users,
    title: "Кадры и зарплаты",
    desc: "Kadry i płace — расчёт зарплат, ZUS, трудовые договоры, umowy zlecenie и о dzieło.",
  },
  {
    icon: FileText,
    title: "Регистрация бизнеса",
    desc: "Помощь в регистрации JDG и sp. z o.o. — от выбора формы до получения NIP и REGON.",
  },
  {
    icon: Briefcase,
    title: "Консультации",
    desc: "Налоговые, юридические и управленческие консультации для предпринимателей.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Наши услуги</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Полный спектр бухгалтерских услуг для вашего бизнеса в Польше
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group p-8 rounded-xl border border-border bg-background hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
