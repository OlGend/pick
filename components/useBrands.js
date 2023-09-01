import useSWR from "swr";

async function getData(page) {
  const response = await fetch(
    `https://hotoffers.casino/wp-json/wp/v2/affiliates?&per_page=100&page=${page}`
  );
  
  if (!response.ok) {
    return []; // Перестаем запрашивать данные, если сервер вернул ошибку
  }
  
  const data = await response.json();
  return data;
}

export function useTopBrands(filterValue) {
  const fetcher = async () => {
    const allData = [];
    let page = 1;

    while (true) {
      const data = await getData(page);
      if (data.length === 0) {
        break; // Прекращаем цикл, если больше данных нет
      }
      allData.push(...data);
      page++;
    }
    
    return allData;
  };

  const { data: allBrands, error } = useSWR("brandsData", fetcher);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  const filteredBrands = allBrands?.filter((brand) => {
    if (brand.lists) {
      const listsValues = Object.values(brand.lists);
      return listsValues.includes(filterValue);
    }
    return false;
  });

  return filteredBrands || [];
}


export function useTopBrandsFilter(depositFilterValue, countryFilterValue) {
  const fetcher = async () => {
    const allData = [];
    let page = 1;

    while (true) {
      const data = await getData(page);
      if (data.length === 0) {
        break; // Прекращаем цикл, если больше данных нет
      }
      allData.push(...data);
      page++;
    }
    
    return allData;
  };

  const { data: allBrands, error } = useSWR("brandsData", fetcher);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  const filteredBrands = allBrands?.filter((brand) => {
    if (brand.lists) {
      const listsValues = Object.values(brand.lists);
      return listsValues.includes(depositFilterValue) && listsValues.includes(countryFilterValue);
    }
    return false;
  });

  return filteredBrands || [];
}
