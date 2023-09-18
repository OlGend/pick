const PER_PAGE = 100;

export async function getData(page = 1) {
  const response = await fetch(
    `https://hotoffers.casino/wp-json/wp/v2/affiliates?page=${page}&per_page=${PER_PAGE}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export async function fetchListOfDynamicPageIds() {
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
