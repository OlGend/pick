import { getServerSideSitemap } from 'next-sitemap';
import { ServerResponse } from 'http'; // Добавлен импорт типа ServerResponse
import { getData } from "@/components/getData"; // Импортируйте функцию загрузки данных

const PER_PAGE = 100;

async function fetchListOfDynamicPageIds() {
  // Получите данные с сервера, например, первую страницу данных
  const initialData = await getData(1);
  const totalPages = Math.ceil(initialData.total / PER_PAGE);
  
  // Создайте массив идентификаторов страниц
  const pageIds = [];

  // Добавьте идентификаторы всех страниц в массив
  for (let page = 1; page <= totalPages; page++) {
    const data = await getData(page);
    data.forEach((item) => {
      pageIds.push(item.id.toString());
    });
  }

  return pageIds;
}

export const getServerSideProps = async ({ res }: { res: ServerResponse }) => {
  try {
    const pageIds = await fetchListOfDynamicPageIds();

    const pages = pageIds.map((id) => ({
      loc: `/bonuses/${id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily', // Настройте по вашему усмотрению
      priority: 0.7, // Настройте по вашему усмотрению
    }));

    return getServerSideSitemap(res, pages);
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    res.setHeader('Content-Type', 'text/xml');
    res.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
    res.end();

    return {
      props: {}
    };
  }
};

export default function Sitemap() {
  return null;
}
