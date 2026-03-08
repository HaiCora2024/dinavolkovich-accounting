import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="gold-line w-16 mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Бухгалтерия
            <br />
            <span className="text-primary">для вашего бизнеса</span>
            <br />
            в Польше
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Профессиональное бухгалтерское обслуживание для JDG и sp.&nbsp;z&nbsp;o.o. 
            Работаем онлайн по всей Польше. Русский, английский, польский.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Записаться на консультацию
            </a>
            <a
              href="#services"
              className="border border-primary text-primary px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-primary/5 transition-colors"
            >
              Наши услуги
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <span className="text-2xl font-heading font-bold text-foreground">50+</span>
              <br />постоянных клиентов
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="text-2xl font-heading font-bold text-foreground">15+</span>
              <br />лет опыта
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="text-2xl font-heading font-bold text-foreground">100%</span>
              <br />онлайн
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-2" />
            <img
              src={heroBg}
              alt="Профессиональное рабочее пространство"
              className="relative rounded-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
