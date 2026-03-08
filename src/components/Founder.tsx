import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const Founder = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-accent/20 rounded-2xl rotate-2" />
            <img
              src={founderImg}
              alt="Dina Volkovich — основатель FINBIZ CENTRUM"
              className="relative rounded-xl w-full max-w-md mx-auto object-cover aspect-square"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line w-16 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Dina Volkovich
            </h2>
            <p className="text-accent font-semibold mb-6">Основатель и руководитель FINBIZ CENTRUM</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Профессиональный бухгалтер с опытом более <strong className="text-foreground">15 лет</strong>. 
                Начала карьеру в 2009 году в Беларуси, где прошла путь от бухгалтера до руководителя 
                собственного бухгалтерского бюро.
              </p>
              <p>
                В Польше с 2023 года. Основала FINBIZ CENTRUM с миссией создать надёжный финансовый 
                фундамент для бизнесов предпринимателей-эмигрантов. Специализируется на IT-секторе 
                и строительных компаниях.
              </p>
              <p>
                Профильное экономическое образование, сертификат СКВП. 
                Лично курирует ключевых клиентов и выстраивает долгосрочные партнёрские отношения, 
                основанные на доверии и прозрачности.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">
                15+ лет опыта
              </div>
              <div className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">
                50+ клиентов
              </div>
              <div className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">
                Экономическое образование
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
