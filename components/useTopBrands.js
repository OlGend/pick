import useSWR from "swr";

async function getData() {
  const response = await fetch(
    `https://hotoffers.casino/wp-json/wp/v2/affiliates?&per_page=100`
  );
  const data = await response.json();
  return data;
}

export function useTopBrands(filterValue) {
  const fetcher = () => getData();

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

  console.log("filter", filteredBrands)
  return filteredBrands || [];
}
