import { motion } from "framer-motion";
import { Shield, Globe, Clock, HeadphonesIcon } from "lucide-react";

const items = [
  { icon: Shield, title: "Застрахованы", desc: "Страхование профессиональной ответственности до 50 000 zł" },
  { icon: Globe, title: "Мультиязычность", desc: "Работаем на русском, английском и польском языках" },
  { icon: Clock, title: "С 2009 года", desc: "Более 15 лет опыта в бухгалтерии и финансовом учёте" },
  { icon: HeadphonesIcon, title: "Онлайн", desc: "Работаем удалённо по всей Польше. Документы — в электронном виде" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line w-16 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              FINBIZ CENTRUM — бухгалтерское бюро для предпринимателей в Польше. 
              Мы специализируемся на обслуживании IT-компаний, строительных предприятий 
              и бизнесов русскоязычного сообщества. Индивидуальный подход, профессиональный 
              сервис и средний ценовой сегмент.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-2xl p-10 text-primary-foreground"
          >
            <h3 className="text-2xl font-bold mb-6">Дополнительные услуги</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                Юридическая поддержка бизнеса
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                Помощь с легализацией в Польше
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                Управленческие консультации
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                Обучение предпринимателей
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                Бухгалтерия для фондов и организаций
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
