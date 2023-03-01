import { listProduct } from "@/types/catalog";

export function getProducts(): Promise<listProduct[]> {
  return new Promise(async(resolve, reject) => {
    try {
      const response = await fetch('http://localhost:3333/graphql?query={allProducts{name,description,image_url}}');
      const { data: { allProducts } } = await response.json();
      resolve(allProducts);
      return;
    } catch (error) {
      reject(new Error('Erro ao trazer produtos!'));
      return;
    }
  });
};
