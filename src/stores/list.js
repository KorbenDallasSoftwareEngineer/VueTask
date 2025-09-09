import { defineStore } from 'pinia';

export const useListStore = defineStore('list', {
  state: () => ({
    items: [
  {
    "title": "Послуги",
    "desc": "Список доступних сервісів",
    "url": "services"
  },
  {
    "title": "Блог",
    "desc": "Статті та новини",
    "url": "blog"
  },
  {
    "title": "Контакти",
    "desc": "Як з нами зв’язатися",
    "url": "contact"
  },
  {
    "title": "Портфоліо",
    "desc": "Наші реалізовані проєкти",
    "url": "portfolio"
  },
  {
    "title": "Ціни",
    "desc": "Вартість продуктів та послуг",
    "url": "pricing"
  },
  {
    "title": "Партнери",
    "desc": "Компанії, з якими ми співпрацюємо",
    "url": "partners"
  },
  {
    "title": "Відгуки",
    "desc": "Думки клієнтів про нас",
    "url": "reviews"
  },
  {
    "title": "Команда",
    "desc": "Наші спеціалісти",
    "url": "team"
  },
  {
    "title": "FAQ",
    "desc": "Часті питання та відповіді",
    "url": "faq"
  },
  {
    "title": "Кар'єра",
    "desc": "Вакансії та робота у нас",
    "url": "career"
  },
  {
    "title": "Новини",
    "desc": "Останні події та оновлення",
    "url": "news"
  },
  {
    "title": "Магазин",
    "desc": "Каталог товарів",
    "url": "shop"
  },
  {
    "title": "Акції",
    "desc": "Спеціальні пропозиції та знижки",
    "url": "offers"
  },
  {
    "title": "Галерея",
    "desc": "Фотографії та відео",
    "url": "gallery"
  },
  {
    "title": "Документи",
    "desc": "Політики та офіційні файли",
    "url": "docs"
  },
  {
    "title": "Підтримка",
    "desc": "Центр допомоги користувачам",
    "url": "support"
  },
  {
    "title": "Форум",
    "desc": "Обговорення та спільнота",
    "url": "forum"
  },
  {
    "title": "Події",
    "desc": "Майбутні заходи та конференції",
    "url": "events"
  }
], 
    loading: false, 
    error: null, 
  }),

  actions: {
    async fetchItem(url) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ошибка сети или сервера');
        }
        const data = await response.json();
        this.items.push(data); 
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});