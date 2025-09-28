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
              <a href="#pricing" className="text-foreground hover:text-gold transition-colors font-body">
                Тарифы
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm font-heading">
                    🔥 ЭКСКЛЮЗИВНО
                  </Badge>
                  <div className="flex items-center space-x-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-current" />
                    ))}
                    <span className="text-sm font-body ml-2">4.9 (2,847 отзывов)</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                  Утренний ритуал
                  <span className="text-gold block">премиум-класса</span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl text-foreground font-body leading-relaxed font-medium">
                    7 завтраков + смузи-шот каждый день
                  </p>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed">
                    Не просто завтраки — готовая система утреннего питания, 
                    которая превращает каждое утро в момент роскоши и заботы о себе.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-6 border border-gold/20">
                  <h3 className="text-gold font-heading font-semibold mb-3 text-lg">
                    Что получаешь каждый день:
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gold/20 rounded-full p-2">
                        <Icon name="Coffee" className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-foreground font-body font-semibold">Завтрак</p>
                        <p className="text-muted-foreground text-sm font-body">Новый каждый день</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gold/20 rounded-full p-2">
                        <Icon name="Zap" className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-foreground font-body font-semibold">Смузи-шот</p>
                        <p className="text-muted-foreground text-sm font-body">Витаминный заряд</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3 bg-charcoal/50 rounded-xl px-4 py-3 border border-charcoal-light">
                  <Icon name="Clock" className="text-gold h-6 w-6" />
                  <div>
                    <p className="text-foreground font-body font-semibold">0 минут готовки</p>
                    <p className="text-muted-foreground text-sm font-body">Просто открой и ешь</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-charcoal/50 rounded-xl px-4 py-3 border border-charcoal-light">
                  <Icon name="Truck" className="text-gold h-6 w-6" />
                  <div>
                    <p className="text-foreground font-body font-semibold">Бесплатная доставка</p>
                    <p className="text-muted-foreground text-sm font-body">По всей Москве</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal-dark font-heading font-bold text-lg px-10 py-6 shadow-xl shadow-gold/20">
                    <Icon name="Crown" className="mr-3 h-6 w-6" />
                    Начать с 2 490 ₽
                  </Button>
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-heading font-semibold text-lg px-10 py-6">
                    <Icon name="Play" className="mr-3 h-6 w-6" />
                    Как это работает
                  </Button>
                </div>
                
                <div className="flex items-center space-x-6 text-muted-foreground font-body text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" className="h-4 w-4 text-gold" />
                    <span>Отмена в любой момент</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="RefreshCw" className="h-4 w-4 text-gold" />
                    <span>Возврат 100%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="/img/1216a78a-3738-463e-81be-d19d85ee27e8.jpg" 
                  alt="Premium breakfast" 
                  className="w-full h-[650px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-gold/10 rounded-2xl" />
                
                <div className="absolute top-6 left-6 right-6">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-gold text-charcoal-dark font-heading font-bold px-4 py-2">
                      ДЕНЬ 1 из 7
                    </Badge>
                    <div className="bg-charcoal-dark/80 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="flex items-center space-x-2 text-gold">
                        <Icon name="Heart" className="h-5 w-5 fill-current" />
                        <span className="font-body text-sm font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-charcoal-dark/80 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                    <h3 className="text-white text-xl font-heading font-bold mb-2">
                      Трюфельный омлет Black Chef
                    </h3>
                    <p className="text-white/90 font-body mb-3">
                      Нежнейший омлет с трюфельной пастой + Immunity Shot
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gold font-body">420 ккал</span>
                        <span className="text-white/70 font-body">18г белка</span>
                      </div>
                      <Badge variant="secondary" className="bg-gold/20 text-gold border-gold/20">
                        ≈ 356 ₽
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-6 shadow-xl shadow-gold/30">
                <div className="text-center text-charcoal-dark">
                  <Icon name="Sparkles" className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-heading font-bold text-sm">ПРЕМИУМ</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-charcoal border border-gold/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/img/2d017015-94e8-46fd-b1e9-5b37e46f094b.jpg" 
                    alt="Smoothie shots"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gold font-heading font-semibold text-sm">+7 смузи-шотов</p>
                    <p className="text-muted-foreground font-body text-xs">В подарок к завтракам</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal-dark">
        <div className="container mx-auto px-6">
          {/* Social Proof Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              {
                number: "2,847",
                label: "Довольных клиентов",
                icon: "Users"
              },
              {
                number: "19,929",
                label: "Завтраков доставлено",
                icon: "Truck"
              },
              {
                number: "4.9",
                label: "Средняя оценка",
                icon: "Star"
              },
              {
                number: "98%",
                label: "Продлевают подписку",
                icon: "RefreshCw"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-charcoal-light/50 rounded-2xl p-8 border border-charcoal-light group-hover:border-gold/50 transition-all duration-300">
                  <Icon name={stat.icon as any} className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm font-heading mb-4">
              ПОЧЕМУ ВЫБИРАЮТ НАС
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Больше чем просто <span className="text-gold">завтраки</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Экономия 2 часов каждое утро",
                description: "Не нужно думать что приготовить, покупать продукты и стоять у плиты. Просто открываешь контейнер — и готово!",
                benefit: "Больше времени на себя"
              },
              {
                icon: "Heart",
                title: "Здоровье без компромиссов",
                description: "Каждый завтрак сбалансирован по БЖУ, витаминам и микроэлементам. Плюс витаминный смузи-шот для иммунитета.",
                benefit: "Энергия на весь день"
              },
              {
                icon: "Sparkles",
                title: "Премиальный уровень сервиса",
                description: "От отборных продуктов до стильной подачи. Каждая деталь продумана для твоего комфорта и удовольствия.",
                benefit: "Чувство роскоши каждый день"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-charcoal border-charcoal-light hover:border-gold/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon name={item.icon as any} className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                    {item.benefit}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 bg-charcoal/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Истории наших <span className="text-gold">клиентов</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Узнайте, как Black Chef изменил утренние ритуалы тысяч людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Кузнецова",
                role: "Предприниматель",
                story: "«Раньше я пропускала завтраки из-за нехватки времени. Теперь каждое утро начинается с удовольствия и энергии на весь день.»",
                result: "Потеряла 5 кг за месяц",
                rating: 5,
                avatar: "👩‍💼"
              },
              {
                name: "Михаил Петров",
                role: "IT-директор",
                story: "«Black Chef превратил мои хаотичные утра в спокойный ритуал. Качество ингредиентов и подача на высшем уровне.»",
                result: "Улучшил концентрацию",
                rating: 5,
                avatar: "👨‍💻"
              },
              {
                name: "Елена Смирнова",
                role: "Мама двоих детей",
                story: "«Теперь у меня есть время позавтракать вместе с детьми, не бегая по кухне. Они тоже в восторге от смузи-шотов!»",
                result: "Больше времени с семьёй",
                rating: 5,
                avatar: "👩‍👧‍👦"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-charcoal border-charcoal-light hover:border-gold/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground font-body text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 text-gold fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-foreground font-body leading-relaxed mb-4 italic">
                    {testimonial.story}
                  </p>
                  
                  <Badge className="bg-gold/10 text-gold border-gold/20">
                    ✨ {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-charcoal/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm font-heading mb-4">
              ТАРИФЫ И УСЛОВИЯ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Выберите <span className="text-gold">свой план</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Гибкие условия подписки для разных потребностей. Всегда можно изменить или приостановить.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Пробный",
                period: "1 неделя",
                price: "2 490",
                oldPrice: null,
                popular: false,
                description: "Попробуйте Black Chef",
                features: [
                  "7 премиальных завтраков",
                  "7 витаминных смузи-шотов",
                  "Бесплатная доставка",
                  "Стильная упаковка",
                  "Можно отменить в любой момент"
                ],
                buttonText: "Попробовать",
                savings: null
              },
              {
                name: "Месячная",
                period: "4 недели",
                price: "8 960",
                oldPrice: "9 960",
                popular: true,
                description: "Самый популярный",
                features: [
                  "28 премиальных завтраков",
                  "28 витаминных смузи-шотов",
                  "Приоритетная доставка",
                  "Персональные рекомендации",
                  "Скидка 10% на следующий месяц",
                  "Гибкий график доставки"
                ],
                buttonText: "Оформить",
                savings: "Экономия 1 000 ₽"
              },
              {
                name: "Квартальная",
                period: "12 недель",
                price: "25 410",
                oldPrice: "29 880",
                popular: false,
                description: "Максимальная выгода",
                features: [
                  "84 премиальных завтрака",
                  "84 витаминных смузи-шота",
                  "VIP-доставка в любое время",
                  "Эксклюзивные блюда",
                  "Персональный куратор",
                  "Бонусные подарки каждый месяц",
                  "Возможность заморозки подписки"
                ],
                buttonText: "Максимум выгоды",
                savings: "Экономия 4 470 ₽"
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gold/5 to-gold/10 border-gold shadow-xl shadow-gold/20' 
                  : 'bg-charcoal border-charcoal-light hover:border-gold/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-px left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gold text-charcoal-dark font-heading font-semibold px-6 py-2">
                      🔥 ПОПУЛЯРНЫЙ
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8 pt-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-heading font-bold text-gold">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground font-body">₽</span>
                        {plan.oldPrice && (
                          <span className="text-lg text-muted-foreground line-through font-body ml-2">
                            {plan.oldPrice} ₽
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground font-body text-sm">
                        {plan.period}
                      </p>
                      {plan.savings && (
                        <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                          {plan.savings}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="Check" className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-body text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full font-heading font-semibold ${
                      plan.popular
                        ? 'bg-gold hover:bg-gold-dark text-charcoal-dark'
                        : 'bg-charcoal-light hover:bg-gold hover:text-charcoal-dark text-foreground border border-charcoal-light'
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Terms and Conditions */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-charcoal border-charcoal-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                  Условия <span className="text-gold">подписки</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-heading font-semibold text-gold mb-3 flex items-center">
                        <Icon name="Truck" className="mr-2 h-5 w-5" />
                        Доставка
                      </h4>
                      <ul className="space-y-2 text-muted-foreground font-body text-sm">
                        <li>• Бесплатная доставка по Москве в пределах МКАД</li>
                        <li>• Доставка за МКАД: +200 ₽ за каждые 10 км</li>
                        <li>• Временные окна: 08:00-12:00, 15:00-20:00</li>
                        <li>• Возможна доставка в выходные (+300 ₽)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-semibold text-gold mb-3 flex items-center">
                        <Icon name="RefreshCw" className="mr-2 h-5 w-5" />
                        Изменения и отмена
                      </h4>
                      <ul className="space-y-2 text-muted-foreground font-body text-sm">
                        <li>• Отмена до 18:00 воскресенья перед доставкой</li>
                        <li>• Пропуск недели: за 48 часов до доставки</li>
                        <li>• Изменение адреса: за 24 часа</li>
                        <li>• Возврат средств в течение 3-5 рабочих дней</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-heading font-semibold text-gold mb-3 flex items-center">
                        <Icon name="Shield" className="mr-2 h-5 w-5" />
                        Качество и гарантии
                      </h4>
                      <ul className="space-y-2 text-muted-foreground font-body text-sm">
                        <li>• Все блюда готовятся в день доставки</li>
                        <li>• Срок годности: 2-3 дня в холодильнике</li>
                        <li>• Возврат 100% при несоответствии качества</li>
                        <li>• Поддержка клиентов 24/7</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-semibold text-gold mb-3 flex items-center">
                        <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                        Оплата
                      </h4>
                      <ul className="space-y-2 text-muted-foreground font-body text-sm">
                        <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                        <li>• Apple Pay, Google Pay, Samsung Pay</li>
                        <li>• Оплата при получении (+150 ₽)</li>
                        <li>• Автоплатёж для регулярных подписок</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-charcoal-light text-center">
                  <p className="text-muted-foreground font-body text-sm">
                    Остались вопросы? Свяжитесь с нами по телефону{' '}
                    <span className="text-gold">+7 (999) 123-45-67</span> или напишите на{' '}
                    <span className="text-gold">hello@blackchef.ru</span>
                  </p>
                </div>
              </CardContent>
            </Card>
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