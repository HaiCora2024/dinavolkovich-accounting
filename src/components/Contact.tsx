import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Связаться с нами</h2>
          <p className="mt-4 text-muted-foreground">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Имя</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="+48..."
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Тип бизнеса</label>
                  <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>JDG</option>
                    <option>Sp. z o.o.</option>
                    <option>Планирую открыть</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="Опишите ваш запрос..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Отправить заявку
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время</p>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Адрес</h4>
                <p className="text-sm text-muted-foreground mt-1">Chmielna 2/31, 00-020 Warszawa, Polska</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Телефон</h4>
                <a href="tel:+48571287322" className="text-sm text-muted-foreground mt-1 block hover:text-primary transition-colors">
                  +48 571 287 322
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Email</h4>
                <a href="mailto:FINBIZ.OFFICE@GMAIL.COM" className="text-sm text-muted-foreground mt-1 block hover:text-primary transition-colors">
                  finbiz.office@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Часы работы</h4>
                <p className="text-sm text-muted-foreground mt-1">Пн — Пт: 10:00 — 18:00</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <a
                href="https://t.me/DinaVo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Telegram
              </a>
              <a
                href="tel:+48571287322"
                className="px-5 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Позвонить
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
