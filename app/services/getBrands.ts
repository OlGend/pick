const PER_PAGE = 100; // Количество элементов на одной странице
export const getAllBrands = async (page = 1) => {
  const response = await fetch(
    `https://hotoffers.casino/wp-json/wp/v2/affiliates?page=${page}&per_page=${PER_PAGE}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
};
