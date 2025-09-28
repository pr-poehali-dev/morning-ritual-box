import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const weeklyMenu = [
    {
      day: 1,
      title: "Трюфельный омлет Black Chef",
      description: "Нежнейший омлет с трюфельной пастой, микрозеленью и хрустящими тостами",
      smoothie: "Immunity Shot",
      smoothieDesc: "Манго, апельсин, имбирь",
      calories: "420 ккал",
      protein: "18г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    },
    {
      day: 2,
      title: "Тропическая рисовая каша",
      description: "Кремовая рисовая каша на кокосовом молоке с манго и орехами",
      smoothie: "Berry Power",
      smoothieDesc: "Черника, малина, банан",
      calories: "380 ккал",
      protein: "12г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    },
    {
      day: 3,
      title: "Блиншот Nutella Boom",
      description: "Тонкие блинчики с натуральной нутеллой и свежими ягодами",
      smoothie: "Green Detox",
      smoothieDesc: "Яблоко, сельдерей, огурец",
      calories: "450 ккал",
      protein: "15г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    },
    {
      day: 4,
      title: "Солнечная глазунья",
      description: "Глазунья из фермерских яиц с авокадо и цельнозерновым хлебом",
      smoothie: "Sweet Fit",
      smoothieDesc: "Клубника, банан, кокос",
      calories: "395 ккал",
      protein: "20г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    },
    {
      day: 5,
      title: "Ягодная энергия в овсянке",
      description: "Овсяная каша с лесными ягодами, орехами и мёдом",
      smoothie: "Sunny Boost",
      smoothieDesc: "Апельсин, морковь, куркума",
      calories: "365 ккал",
      protein: "14г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    },
    {
      day: 6,
      title: "Сырничный дуэт",
      description: "Воздушные сырники с ванильным соусом и карамелизованными фруктами",
      smoothie: "Fresh Balance",
      smoothieDesc: "Груша, шпинат, лайм",
      calories: "410 ккал",
      protein: "16г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    },
    {
      day: 7,
      title: "Чиа Morning Glow",
      description: "Пудинг из семян чиа с кокосовым молоком и тропическими фруктами",
      smoothie: "Blue Mood",
      smoothieDesc: "Черника, йогурт, ваниль",
      calories: "340 ккал",
      protein: "11г",
      image: "/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal-dark">
      {/* Header */}
      <header className="border-b border-charcoal bg-charcoal-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Crown" className="text-gold h-8 w-8" />
              <h1 className="text-2xl font-heading font-bold text-gold">BLACK CHEF</h1>
              <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                PREMIUM
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-foreground hover:text-gold transition-colors font-body">
                Меню
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-gold transition-colors font-body">
                Как это работает
              </a>
              <a href="#subscribe" className="text-foreground hover:text-gold transition-colors font-body">
                Подписка
              </a>
            </nav>
            <Button className="bg-gold hover:bg-gold-dark text-charcoal-dark font-heading font-semibold">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal-dark" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm font-heading">
                  🌿 НОВАЯ ПОДПИСКА
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                  7 завтраков
                  <span className="text-gold block">+ смузи-шот</span>
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed">
                  Твой утренний ритуал энергии и красоты на неделю. 
                  Готовая система питания, которая сочетает вкус, лёгкость и пользу.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Clock" className="text-gold h-5 w-5" />
                  <span className="font-body">Экономия времени</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Heart" className="text-gold h-5 w-5" />
                  <span className="font-body">Польза и вкус</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Sparkles" className="text-gold h-5 w-5" />
                  <span className="font-body">Премиум качество</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal-dark font-heading font-semibold text-lg px-8 py-4">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Оформить подписку
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal-dark font-heading font-semibold text-lg px-8 py-4">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть видео
                </Button>
              </div>
              
              <div className="bg-charcoal/50 rounded-xl p-6 border border-charcoal">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-heading font-bold text-gold">2 490 ₽</p>
                    <p className="text-muted-foreground font-body">за неделю</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground font-body">≈356 ₽ за день</p>
                    <p className="text-sm text-gold font-body">🚚 Доставка включена</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg" 
                  alt="Premium breakfast" 
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-gold text-charcoal-dark font-heading font-semibold mb-3">
                    День 1
                  </Badge>
                  <h3 className="text-white text-xl font-heading font-semibold mb-2">
                    Трюфельный омлет Black Chef
                  </h3>
                  <p className="text-white/80 font-body">
                    + Immunity Shot (манго, апельсин, имбирь)
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gold text-charcoal-dark rounded-full p-4">
                <Icon name="Sparkles" className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menu Section */}
      <section id="menu" className="py-20 bg-charcoal/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm font-heading mb-4">
              МЕНЮ НЕДЕЛИ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              7 дней <span className="text-gold">вкусного разнообразия</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Каждый день — новый вкус и настроение. От трюфельных омлетов до тропических каш. 
              Плюс витаминный смузи-шот к каждому завтраку.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyMenu.map((item, index) => (
              <Card key={item.day} className={`bg-charcoal border-charcoal-light hover:border-gold/50 transition-all duration-300 overflow-hidden group animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-charcoal-dark font-heading font-semibold">
                      День {item.day}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-charcoal-dark/80 backdrop-blur-sm rounded-full p-2">
                    <Icon name="Heart" className="h-5 w-5 text-gold" />
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="bg-charcoal-dark/50 rounded-lg p-4 border border-charcoal-light">
                    <div className="flex items-center space-x-2 mb-2">
                      <img 
                        src="/img/2d017015-94e8-46fd-b1e9-5b37e46f094b.jpg" 
                        alt={item.smoothie}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gold font-heading font-semibold text-sm">{item.smoothie}</p>
                        <p className="text-muted-foreground font-body text-xs">{item.smoothieDesc}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Zap" className="h-4 w-4 text-gold" />
                      <span className="text-muted-foreground font-body">{item.calories}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Activity" className="h-4 w-4 text-gold" />
                      <span className="text-muted-foreground font-body">{item.protein} белка</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Как это <span className="text-gold">работает</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Простые шаги к идеальному утру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ShoppingCart",
                title: "Оформляешь подписку",
                description: "Выбираешь удобный день доставки и оплачиваешь неделю премиальных завтраков"
              },
              {
                icon: "Truck",
                title: "Получаешь доставку",
                description: "7 контейнеров с завтраками и смузи-шотами привозят прямо к твоему порогу"
              },
              {
                icon: "Coffee",
                title: "Наслаждаешься",
                description: "Каждое утро просто открываешь контейнер и получаешь готовый стильный завтрак"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-charcoal rounded-2xl p-8 mb-6 border border-charcoal-light group-hover:border-gold/50 transition-all duration-300">
                  <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon name={step.icon as any} className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="text-gold font-heading font-bold text-lg">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="subscribe" className="py-20 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-gold/10 text-gold border-gold/20 px-6 py-3 text-base font-heading">
              ✨ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-foreground">
              Готов к <span className="text-gold">премиальным</span> утрам?
            </h2>
            
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Начни свою неделю с энергии и красоты. Подписка Black Chef — это не просто завтраки, 
              это новый уровень заботы о себе.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal-dark font-heading font-semibold text-xl px-12 py-6">
                <Icon name="Crown" className="mr-3 h-6 w-6" />
                Оформить подписку за 2 490 ₽
              </Button>
              <p className="text-muted-foreground font-body">
                🎁 Первая доставка уже завтра
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-dark border-t border-charcoal py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Icon name="Crown" className="text-gold h-8 w-8" />
              <h3 className="text-2xl font-heading font-bold text-gold">BLACK CHEF</h3>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Phone" className="h-5 w-5 text-gold" />
                <span className="font-body">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Mail" className="h-5 w-5 text-gold" />
                <span className="font-body">hello@blackchef.ru</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-charcoal mt-8 pt-8 text-center">
            <p className="text-muted-foreground font-body">
              © 2024 Black Chef. Премиальные завтраки с доставкой.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;