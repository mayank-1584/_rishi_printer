const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-sm font-bold text-primary-foreground">P</span>
            </div>
            <span className="font-display text-lg font-bold text-background">PressCraft</span>
          </div>
          <p className="text-sm text-background/50 font-body max-w-xs leading-relaxed">
            Premium artisan printing since 1987. Where craftsmanship meets modern technology.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-background mb-4 text-sm">Services</h4>
          <div className="space-y-2">
            {["Letterpress", "Offset", "Foil Stamping", "Book Binding"].map((s) => (
              <div key={s} className="text-sm text-background/40 font-body hover:text-background/70 transition-colors cursor-pointer">
                {s}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-background mb-4 text-sm">Company</h4>
          <div className="space-y-2">
            {["About", "Portfolio", "Contact", "Careers"].map((s) => (
              <div key={s} className="text-sm text-background/40 font-body hover:text-background/70 transition-colors cursor-pointer">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-background/30 font-body">© 2024 PressCraft. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Sitemap"].map((s) => (
            <span key={s} className="text-xs text-background/30 font-body hover:text-background/50 transition-colors cursor-pointer">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
