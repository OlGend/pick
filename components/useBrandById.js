// /src/hooks/useBrandById.js
import useSWR from "swr";

async function getData(id) {
  const response = await fetch(
    `https://hotoffers.casino/wp-json/wp/v2/affiliates/${id}`
  );
  const data = await response.json();
  return data;
}

export function useBrandById(id) {
  const fetcher = () => getData(id);

  const { data: brand, error } = useSWR(`brandData_${id}`, fetcher);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return brand;
}
