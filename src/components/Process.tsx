import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const Process = () => {
  const { t } = useI18n();
  const steps = [
    { num: "01", title: t("process.s1.title"), desc: t("process.s1.desc") },
    { num: "02", title: t("process.s2.title"), desc: t("process.s2.desc") },
    { num: "03", title: t("process.s3.title"), desc: t("process.s3.desc") },
    { num: "04", title: t("process.s4.title"), desc: t("process.s4.desc") },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("process.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("process.desc")}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="text-center">
              <span className="text-4xl font-heading font-bold text-accent">{s.num}</span>
              <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
