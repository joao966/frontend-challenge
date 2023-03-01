"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProducts } from '@/services';
import { listProduct } from '@/types/catalog';
import * as S from '@/style/components/catalog/organisms';
import { Tab } from '@/components/molecules/catalog/tab';

export default function OrganismCatalog() {
  const [allProducts, setAllProducts] = useState<listProduct[]>([]);

  useEffect(() => {
    getProducts()
      .then((data: listProduct[]): void => {
        setAllProducts(data);
      })
      .catch((error): void => console.error(error));
  }, []);
  
  allProducts.length === 0 ? <div>Carregando...</div> : null;

  return (
    <Tab
      id="catalog"
      components={[
        {
          title: "TODOS OS PRODUTOS",
          content: (
            <S.WrapperMobile>
              {allProducts?.slice(0, 4).map(({ name, description, image_url }: listProduct, i: number) => (
                <S.Card key={i}>
                  <S.Title>{name}</S.Title>
                  <S.Description>{description}</S.Description>
                  <Image src={image_url} width={180} height={180} alt='product' />
                </S.Card>
              ))}
            </S.WrapperMobile>
          )
        },
        { 
          title: "CAMISETAS",
          content: "camisas"
        },
        { 
          title: "CANECAS",
          content: "canecas"
        }
      ]}
    />
  );
};
