import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <img src={logo} alt="FinBiz Centrum" className="h-8 brightness-0 invert mb-4" />
            <p className="text-sm opacity-60 leading-relaxed">
              Профессиональное бухгалтерское обслуживание для бизнеса в Польше
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Навигация</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Услуги</a>
              <a href="#pricing" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Цены</a>
              <a href="#about" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">О нас</a>
              <a href="#contact" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Контакты</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Юридическая информация</h4>
            <div className="text-sm opacity-60 space-y-1">
              <p>FINBIZ CENTRUM SP. Z O.O.</p>
              <p>KRS: 0001224296</p>
              <p>NIP: 5253079744</p>
              <p>REGON: 544012170</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-40">
          © {new Date().getFullYear()} FINBIZ CENTRUM SP. Z O.O. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
