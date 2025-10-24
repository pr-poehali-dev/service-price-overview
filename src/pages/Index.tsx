import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    category: 'Уголовные дела',
    icon: 'Shield',
    items: [
      { name: 'Консультация по уголовному делу', price: 'от 3 000 ₽' },
      { name: 'Защита по наркотическим преступлениям', price: 'от 50 000 ₽' },
      { name: 'Защита по делам об убийстве', price: 'от 100 000 ₽' },
      { name: 'Защита несовершеннолетних', price: 'от 40 000 ₽' },
      { name: 'Представительство в суде (уголовное)', price: 'от 30 000 ₽' },
    ]
  },
  {
    category: 'Гражданские дела',
    icon: 'FileText',
    items: [
      { name: 'Консультация юриста', price: 'от 2 000 ₽' },
      { name: 'Составление искового заявления', price: 'от 5 000 ₽' },
      { name: 'Представительство в суде', price: 'от 25 000 ₽' },
      { name: 'Взыскание долгов', price: 'от 15 000 ₽' },
      { name: 'Защита прав потребителей', price: 'от 10 000 ₽' },
    ]
  },
  {
    category: 'Недвижимость',
    icon: 'Home',
    items: [
      { name: 'Сопровождение сделок с недвижимостью', price: 'от 20 000 ₽' },
      { name: 'Оформление наследства', price: 'от 15 000 ₽' },
      { name: 'Жилищные споры', price: 'от 20 000 ₽' },
      { name: 'Приватизация', price: 'от 25 000 ₽' },
      { name: 'Регистрация права собственности', price: 'от 10 000 ₽' },
    ]
  },
  {
    category: 'Семейное право',
    icon: 'Users',
    items: [
      { name: 'Расторжение брака', price: 'от 15 000 ₽' },
      { name: 'Раздел имущества супругов', price: 'от 30 000 ₽' },
      { name: 'Алименты', price: 'от 12 000 ₽' },
      { name: 'Определение места жительства ребенка', price: 'от 25 000 ₽' },
      { name: 'Усыновление', price: 'от 40 000 ₽' },
    ]
  },
  {
    category: 'Трудовые споры',
    icon: 'Briefcase',
    items: [
      { name: 'Консультация по трудовым спорам', price: 'от 2 500 ₽' },
      { name: 'Восстановление на работе', price: 'от 20 000 ₽' },
      { name: 'Взыскание заработной платы', price: 'от 15 000 ₽' },
      { name: 'Оспаривание увольнения', price: 'от 18 000 ₽' },
      { name: 'Составление трудового договора', price: 'от 5 000 ₽' },
    ]
  },
  {
    category: 'ДТП и страхование',
    icon: 'Car',
    items: [
      { name: 'Помощь при ДТП', price: 'от 10 000 ₽' },
      { name: 'Взыскание ущерба с виновника', price: 'от 15 000 ₽' },
      { name: 'Страховой случай', price: 'от 12 000 ₽' },
      { name: 'Оспаривание вины в ДТП', price: 'от 20 000 ₽' },
      { name: 'Лишение водительских прав', price: 'от 25 000 ₽' },
    ]
  },
  {
    category: 'Административные дела',
    icon: 'Scale',
    items: [
      { name: 'Административные споры', price: 'от 10 000 ₽' },
      { name: 'Обжалование постановлений ГИБДД', price: 'от 8 000 ₽' },
      { name: 'Защита по административным делам', price: 'от 15 000 ₽' },
      { name: 'Миграционные вопросы', price: 'от 12 000 ₽' },
      { name: 'Гражданство РФ', price: 'от 30 000 ₽' },
    ]
  },
  {
    category: 'Налоговое право',
    icon: 'Receipt',
    items: [
      { name: 'Налоговые споры', price: 'от 25 000 ₽' },
      { name: 'Налоговая оптимизация', price: 'от 20 000 ₽' },
      { name: 'Обжалование решений налоговой', price: 'от 18 000 ₽' },
      { name: 'Возврат переплаты по налогам', price: 'от 15 000 ₽' },
      { name: 'Налоговые проверки', price: 'от 30 000 ₽' },
    ]
  },
  {
    category: 'Юридические лица',
    icon: 'Building2',
    items: [
      { name: 'Регистрация ООО', price: 'от 15 000 ₽' },
      { name: 'Регистрация ИП', price: 'от 8 000 ₽' },
      { name: 'Ликвидация организации', price: 'от 25 000 ₽' },
      { name: 'Абонентское обслуживание', price: 'от 20 000 ₽/мес' },
      { name: 'Корпоративные споры', price: 'от 40 000 ₽' },
    ]
  },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={28} className="text-primary" />
              <span className="text-xl font-bold text-primary">Коллегия Адвокатов</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className={`transition-colors ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className={`transition-colors ${activeSection === 'services' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>
                Услуги и цены
              </button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${activeSection === 'about' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className={`transition-colors ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Профессиональная юридическая помощь
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Защитим ваши права и интересы в любой ситуации. Более 15 лет опыта в юридической практике.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8"
                onClick={() => scrollToSection('contacts')}
              >
                Получить консультацию
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Выигранных дел</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-gray-600">Лет опыта</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Поддержка</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Успеха</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги и цены</h2>
            <p className="text-xl text-gray-600">Полный спектр юридических услуг для физических и юридических лиц</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start gap-2 pb-3 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600 flex-1">{item.name}</span>
                        <span className="text-sm font-semibold text-primary whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-xl text-center">
            <Icon name="Info" className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="text-xl font-semibold mb-2">Индивидуальный подход к каждому клиенту</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Стоимость услуг может варьироваться в зависимости от сложности дела. 
              Первая консультация — бесплатно. Мы работаем как с физическими, так и с юридическими лицами.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О нашей коллегии</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Наша коллегия адвокатов — это команда профессионалов с многолетним опытом в различных областях права. 
                Мы специализируемся на защите интересов клиентов в судах всех инстанций.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Мы гордимся тем, что помогли сотням клиентов решить их юридические проблемы. 
                Наш подход основан на глубоком знании законодательства, внимательном отношении к каждому делу 
                и стремлении достичь наилучшего результата для клиента.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-primary">Профессионализм</div>
                    <div className="text-sm text-gray-600">Опытные юристы</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-primary">Конфиденциальность</div>
                    <div className="text-sm text-gray-600">Гарантия защиты данных</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-primary">Доступность</div>
                    <div className="text-sm text-gray-600">Прозрачные цены</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-primary">Эффективность</div>
                    <div className="text-sm text-gray-600">Быстрое решение</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6 bg-primary text-white">
                  <Icon name="Award" size={32} className="mb-3" />
                  <h4 className="font-semibold mb-2">Сертифицированные специалисты</h4>
                  <p className="text-sm opacity-90">Все наши адвокаты имеют лицензии и сертификаты</p>
                </Card>
                <Card className="p-6">
                  <Icon name="Shield" size={32} className="mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Гарантия результата</h4>
                  <p className="text-sm text-gray-600">Работаем до победы</p>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6">
                  <Icon name="Clock" size={32} className="mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Быстрый отклик</h4>
                  <p className="text-sm text-gray-600">Консультация в день обращения</p>
                </Card>
                <Card className="p-6 bg-accent text-white">
                  <Icon name="Users" size={32} className="mb-3" />
                  <h4 className="font-semibold mb-2">Индивидуальный подход</h4>
                  <p className="text-sm opacity-90">Учитываем все детали вашего дела</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Получите бесплатную консультацию прямо сейчас</p>
          </div>

          <Card className="p-8 shadow-lg">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Телефон</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Опишите вашу ситуацию</label>
                <Textarea 
                  placeholder="Расскажите нам о вашей проблеме..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@lawfirm.ru</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-gray-600">Москва, ул. Примерная, 10</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Scale" size={24} />
            <span className="text-xl font-bold">Коллегия Адвокатов</span>
          </div>
          <p className="text-white/80 mb-4">© 2024 Все права защищены</p>
          <p className="text-sm text-white/60">Профессиональная юридическая помощь с 2009 года</p>
        </div>
      </footer>
    </div>
  );
}
