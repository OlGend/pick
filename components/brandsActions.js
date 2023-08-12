// brandsActions.js
import { setShowBrands } from "@/components/redux/store";

export const setShowBrandsAsync = (filteredBrands) => (dispatch) => {
  // Выполните асинхронные операции здесь, если необходимо
  // Затем диспетчеризуйте синхронное действие внутри асинхронной функции
  console.log("обновляем")
  dispatch(setShowBrands(filteredBrands));
};
export const clearShowBrands = () => (dispatch) => {
  dispatch(setShowBrands([])); // Передаем пустой массив, чтобы очистить данные
  console.log("удаляем")
};
