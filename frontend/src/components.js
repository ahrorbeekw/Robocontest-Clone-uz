import React, { useState } from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">RoboContest</h1>
            <span className="text-sm text-gray-500">Bosh sahifa</span>
          </div>
          <div className="flex items-center space-x-4">
            <select className="text-sm border rounded px-2 py-1">
              <option>O'zbekcha</option>
              <option>Русский</option>
              <option>English</option>
              <option>Qaraqalpaqsha</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'users', icon: '👥', label: 'Foydalanuvchilar', color: 'text-blue-500' },
    { id: 'problems', icon: '📝', label: 'Masalalar', color: 'text-blue-500' },
    { id: 'attempts', icon: '💎', label: 'Urinishlar', color: 'text-blue-500' },
    { id: 'olympiads', icon: '🏆', label: 'Olimpiadalar', color: 'text-blue-500' },
    { id: 'tests', icon: '✖️', label: 'Testlar', color: 'text-blue-500' },
    { id: 'courses', icon: '📚', label: 'Kurslar', color: 'text-blue-500' },
    { id: 'blogs', icon: '✏️', label: 'Bloglar', color: 'text-blue-500' },
    { id: 'organization', icon: '🏢', label: 'Tizimda ishlaish', color: 'text-blue-500' },
  ];

  const additionalItems = [
    { id: 'our-jamoa', icon: '💡', label: 'Bizning jamoa', color: 'text-blue-500' },
    { id: 'telegram', icon: '📱', label: 'Telegram kanalimiz', color: 'text-blue-500' },
    { id: 'enter', icon: '✏️', label: 'Kirish', color: 'text-blue-500' },
    { id: 'register', icon: '👤', label: 'Ro\'yxatdan o\'tish', color: 'text-blue-500' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors ${
                activeItem === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
          
          <div className="border-t pt-4 mt-4">
            {additionalItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors text-gray-700 hover:bg-gray-50"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Bu qanday sayt?</h2>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHByb2dyYW1taW5nfGVufDB8fHxibHVlfDE3NTQyMjQxNzN8MA&ixlib=rb-4.1.0&q=85"
                  alt="RoboContest" 
                  className="w-32 h-20 object-cover rounded"
                />
                <div className="text-center mt-2">
                  <div className="text-xs font-bold">ROBOCONTEST.UZ</div>
                  <div className="text-xs opacity-75">Dasturlash bo'lgan o'rganish</div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-4">
                  <strong>Robocontest.uz</strong> - bu sizning dasturlash mahoratingizni oshirish, bilimingizni kengaytirish 
                  va texnik suhbatlarga tayyorgarlik ko'rish uchun yordam beradigan eng ilg'or 
                  platformalardan biri.
                </p>
                <p className="text-sm">
                  Ushbu platforma dunyoning eng kuchli algo platformalari tajribasini o'rganish asosida 
                  yaratilgan bo'lib o'quv va do'stona raqobatni kuchaytirish imkonini yaratadi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Cards Component
export const FeatureCards = () => {
  const features = [
    {
      icon: "📈",
      title: "Tizimda ishlaish",
      description: "Tizimda qanday ishlashini bilmayszmi? Bu uchun ushbu bo'limni o'rganib chiqish tavsiya etiladi."
    },
    {
      icon: "📖", 
      title: "Masalalar",
      description: "Turli haqida yetarlicha tushunchaga ega bo'ldingizmi? Unday bo'lsa masalar yechish vaqti keldi!"
    },
    {
      icon: "🏆",
      title: "Olimpiadalar", 
      description: "Kuchingizni sinab ko'maqchimisiz? Unday bo'lsa tizimda bo'lib o'tadigan musobaqalarda qatnashing!"
    },
    {
      icon: "👥",
      title: "Reyting",
      description: "Eng kuchlilar reytingi. Siz ham yuqori o'rinlarda bo'lishni xohlaysizmi? Unday bo'lsa yaqtin boy bermang. Masala yechishni boshlang!"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

// News Section Component  
export const NewsSection = () => {
  const news = [
    {
      title: "Arxiv International IT Olympiad 2025",
      subtitle: "Arxibeklar bo'limi",
      date: "17.09 / 16.04.2025",
      views: "30",
      likes: "51", 
      shares: "1150",
      image: "https://images.unsplash.com/photo-1637249786345-a064129dd0d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxyb2JvdGljcyUyMHByb2dyYW1taW5nfGVufDB8fHxibHVlfDE3NTQyMjQxNzN8MA&ixlib=rb-4.1.0&q=85",
      bgColor: "bg-blue-600"
    },
    {
      title: "Robocontest Round #103 (3.14 !)",
      subtitle: "Pi tayyorlash akademiyasi",
      date: "13.07 / 09.03.2025",
      views: "22",
      likes: "34",
      shares: "1023", 
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjaGFsbGVuZ2V8ZW58MHx8fGJsdWV8MTc1NDIyNDE3OHww&ixlib=rb-4.1.0&q=85",
      bgColor: "bg-gray-800",
      tags: ["#contest", "#pi", "#riyaziy"]
    },
    {
      title: "ROBOCONTEST MERCH GIVEAWAY", 
      subtitle: "Contest loyihasi",
      date: "00:11 / 07.02.2025",
      views: "168",
      likes: "246", 
      shares: "3000",
      image: "https://images.unsplash.com/photo-1613203713329-b2e39e14c266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBjaGFsbGVuZ2V8ZW58MHx8fGJsdWV8MTc1NDIyNDE3OHww&ixlib=rb-4.1.0&q=85",
      bgColor: "bg-gray-700",
      tags: ["#RoboContestMerch", "#GiveAway"]
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Yangiliklar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
            <div className={`h-32 ${item.bgColor} relative overflow-hidden`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-2 left-2 text-white">
                <div className="text-lg font-bold">{item.title}</div>
                <div className="text-sm opacity-90">{item.subtitle}</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{item.date}</span>
                <div className="flex space-x-2">
                  <span>👁 {item.views}</span>
                  <span>❤️ {item.likes}</span>
                  <span>📤 {item.shares}</span>
                </div>
              </div>
              {item.tags && (
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Upcoming Competitions Component
export const UpcomingCompetitions = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Keyingi musobaqa</h2>
      <div className="bg-white rounded-lg shadow-sm border p-6 text-center">  
        <div className="text-6xl mb-4">⚙️</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Yaqinlashib kelayotgan musobaqalar yo'q</h3>
      </div>
    </div>
  );
};

// Top 3 Ranking Component
export const Top3Ranking = () => {
  const topUsers = [
    {
      name: "Asilbek Sunnatov",
      points: 2650,
      university: "Muhammad al-Xorazmiy...",
      position: 1,
      medal: "🥇"
    },
    {
      name: "Dilshodbek Xo'jayev", 
      points: 2553,
      university: "",
      position: 2,
      medal: "🥈"
    },
    {
      name: "Nazarbek Battabaev",
      points: 2492,
      university: "Xorazmshon",
      position: 3, 
      medal: "🥉"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Top 3</h2>
      <div className="bg-white rounded-lg shadow-sm border">
        {topUsers.map((user, index) => (
          <div key={index} className="flex items-center p-4 border-b last:border-b-0">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl">{user.medal}</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{user.name}</div>
              <div className="text-sm text-gray-500">⭐ {user.points}</div>
              {user.university && <div className="text-xs text-gray-400">{user.university}</div>}
            </div>
            <div className="text-2xl">{user.medal}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Statistics Component
export const Statistics = () => {
  const stats = [
    {
      icon: "👥",
      title: "Foydalanuvchilar soni", 
      value: "158910",
      color: "text-blue-500"
    },
    {
      icon: "💎",
      title: "Urinishlar soni",
      value: "8492471", 
      color: "text-green-500"
    },
    {
      icon: "📖",
      title: "Masalalar soni",
      value: "1212 ( 7112 )",
      color: "text-purple-500"
    },
    {
      icon: "👥",
      title: "Olimpiadalar o'tkazildi",
      value: "278 ( 12100 )",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Statistika</h2>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="text-2xl">{stat.icon}</div>
              <div>
                <div className="text-sm text-gray-600">{stat.title}</div>
                <div className={`font-bold ${stat.color}`}>{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6 mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            🔗 Yangilikiardan xabardor bo'lish uchun
          </button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded text-sm hover:bg-blue-500">
            📱 Telegram kanalimizga obuna bo'ling
          </button>
        </div>
        
        <div className="text-center text-sm text-gray-600">
          <p>Robocontest.uz Copyrighted © 2020-2025 by <a href="#" className="text-blue-500">Robocontest Team</a></p>
          <p>Tel: +998-(95)-340-10-70</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-500">O`zbekcha</a>
            <a href="#" className="text-blue-500">Русский</a>
            <a href="#" className="text-blue-500">English</a>
            <a href="#" className="text-blue-500">Qaraqalpaqsha</a>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-400 mt-4">
          Generated in 14ms
        </div>
      </div>
    </footer>
  );
};