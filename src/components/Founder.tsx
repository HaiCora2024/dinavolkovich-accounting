import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";
import { useI18n } from "@/lib/i18n";

const Founder = () => {
  const { t } = useI18n();
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -inset-3 bg-accent/20 rounded-2xl rotate-2" />
            <img src={founderImg} alt="Dina Volkovich" className="relative rounded-xl w-full max-w-md mx-auto object-cover aspect-square" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="gold-line w-16 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Dina Volkovich</h2>
            <p className="text-accent font-semibold mb-6">{t("founder.role")}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("founder.p1") }} />
              <p>{t("founder.p2")}</p>
              <p>{t("founder.p3")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {["b1", "b2", "b3"].map((k) => (
                <div key={k} className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">
                  {t(`founder.${k}`)}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
