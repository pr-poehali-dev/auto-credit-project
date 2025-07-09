import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceFrom: "",
    priceTo: "",
    year: "",
    fuelType: "",
  });

  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2024,
      price: 2890000,
      image:
        "https://via.placeholder.com/400x250/2563EB/ffffff?text=Toyota+Camry",
      fuel: "Бензин",
      transmission: "Автомат",
      engine: "2.5L",
      creditPrice: 24900,
      tradeDiscount: 150000,
    },
    {
      id: 2,
      brand: "BMW",
      model: "X5",
      year: 2024,
      price: 6450000,
      image: "https://via.placeholder.com/400x250/2563EB/ffffff?text=BMW+X5",
      fuel: "Бензин",
      transmission: "Автомат",
      engine: "3.0L",
      creditPrice: 55500,
      tradeDiscount: 320000,
    },
    {
      id: 3,
      brand: "Audi",
      model: "A4",
      year: 2024,
      price: 4290000,
      image: "https://via.placeholder.com/400x250/2563EB/ffffff?text=Audi+A4",
      fuel: "Бензин",
      transmission: "Автомат",
      engine: "2.0L",
      creditPrice: 36900,
      tradeDiscount: 215000,
    },
    {
      id: 4,
      brand: "Mercedes",
      model: "E-Class",
      year: 2024,
      price: 5890000,
      image:
        "https://via.placeholder.com/400x250/2563EB/ffffff?text=Mercedes+E-Class",
      fuel: "Бензин",
      transmission: "Автомат",
      engine: "2.0L",
      creditPrice: 50700,
      tradeDiscount: 295000,
    },
    {
      id: 5,
      brand: "Hyundai",
      model: "Tucson",
      year: 2024,
      price: 3190000,
      image:
        "https://via.placeholder.com/400x250/2563EB/ffffff?text=Hyundai+Tucson",
      fuel: "Бензин",
      transmission: "Автомат",
      engine: "2.0L",
      creditPrice: 27400,
      tradeDiscount: 160000,
    },
    {
      id: 6,
      brand: "Mazda",
      model: "CX-5",
      year: 2024,
      price: 3690000,
      image:
        "https://via.placeholder.com/400x250/2563EB/ffffff?text=Mazda+CX-5",
      fuel: "Бензин",
      transmission: "Автомат",
      engine: "2.5L",
      creditPrice: 31700,
      tradeDiscount: 185000,
    },
  ];

  const brands = [...new Set(cars.map((car) => car.brand))];
  const models = filters.brand
    ? cars.filter((car) => car.brand === filters.brand).map((car) => car.model)
    : [];

  const filteredCars = cars.filter((car) => {
    return (
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.model || car.model === filters.model) &&
      (!filters.priceFrom || car.price >= parseInt(filters.priceFrom)) &&
      (!filters.priceTo || car.price <= parseInt(filters.priceTo)) &&
      (!filters.year || car.year.toString() === filters.year) &&
      (!filters.fuelType || car.fuel === filters.fuelType)
    );
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " ₽";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Car" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AutoCredit</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Кредитование
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Трейд-ин
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />8 (800) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="business-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-shadow animate-fade-in">
            Новые автомобили в кредит
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up">
            Большой выбор новых автомобилей с выгодными условиями кредитования и
            программой трейд-ин
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover-scale"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать кредит
            </Button>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="Filter" size={20} className="mr-2" />
              Фильтры поиска
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Марка
                </label>
                <Select
                  value={filters.brand}
                  onValueChange={(value) =>
                    setFilters({ ...filters, brand: value, model: "" })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите марку" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Модель
                </label>
                <Select
                  value={filters.model}
                  onValueChange={(value) =>
                    setFilters({ ...filters, model: value })
                  }
                  disabled={!filters.brand}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цена от
                </label>
                <Input
                  type="number"
                  placeholder="1 000 000"
                  value={filters.priceFrom}
                  onChange={(e) =>
                    setFilters({ ...filters, priceFrom: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цена до
                </label>
                <Input
                  type="number"
                  placeholder="5 000 000"
                  value={filters.priceTo}
                  onChange={(e) =>
                    setFilters({ ...filters, priceTo: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Год
                </label>
                <Select
                  value={filters.year}
                  onValueChange={(value) =>
                    setFilters({ ...filters, year: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Год" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Топливо
                </label>
                <Select
                  value={filters.fuelType}
                  onValueChange={(value) =>
                    setFilters({ ...filters, fuelType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Бензин">Бензин</SelectItem>
                    <SelectItem value="Дизель">Дизель</SelectItem>
                    <SelectItem value="Гибрид">Гибрид</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button
                onClick={() =>
                  setFilters({
                    brand: "",
                    model: "",
                    priceFrom: "",
                    priceTo: "",
                    year: "",
                    fuelType: "",
                  })
                }
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить фильтры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Catalog */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Каталог автомобилей ({filteredCars.length})
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Сортировать:</span>
              <Select defaultValue="price-asc">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">По цене ↑</SelectItem>
                  <SelectItem value="price-desc">По цене ↓</SelectItem>
                  <SelectItem value="year-desc">По году ↓</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden card-hover animate-fade-in"
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600">
                    Новый
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      {car.brand} {car.model}
                    </CardTitle>
                    <span className="text-sm text-gray-500">{car.year}</span>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <Icon name="Fuel" size={14} className="mr-1" />
                      {car.fuel}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Settings" size={14} className="mr-1" />
                      {car.transmission}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Zap" size={14} className="mr-1" />
                      {car.engine}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {formatPrice(car.price)}
                    </div>
                    <div className="text-sm text-gray-600">
                      В кредит от {formatPrice(car.creditPrice)}/мес
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Icon name="CreditCard" size={16} className="mr-2" />В
                      кредит
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50"
                    >
                      <Icon name="RefreshCw" size={16} className="mr-2" />
                      Трейд-ин
                    </Button>
                  </div>

                  <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-center text-sm text-amber-700">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      <span className="font-medium">
                        Доплата при трейд-ин: {formatPrice(car.tradeDiscount)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Car" size={24} className="text-blue-400" />
                <h4 className="text-xl font-bold">AutoCredit</h4>
              </div>
              <p className="text-gray-400">
                Надежный партнер в покупке автомобилей с выгодными условиями
                кредитования
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Автокредитование</li>
                <li>Программа трейд-ин</li>
                <li>Страхование</li>
                <li>Гарантийное обслуживание</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Новости</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />8 (800)
                  555-0123
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@autocredit.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoCredit. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
