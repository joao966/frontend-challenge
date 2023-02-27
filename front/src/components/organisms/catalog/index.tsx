"use client";
import Image from 'next/image';
import * as S from '@/style/components/catalog/organisms';
import { getProducts } from '@/services';
import { useEffect, useState } from 'react';

export default function OrganismCatalog() {
  const [allProducts, setallProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data: any) => {
        setallProducts(data);
      })
      .catch(error => console.error(error));
  }, []);
  
  if(allProducts.length === 0) return <div>Carregando...</div>;

  return (
    <S.WrapperMobile>
      {allProducts?.map((cur: any, i: number) => {
        const pathImage = `${cur.image_url}`;
        return (
          <S.Card key={i}>
            <h2>{cur.name}</h2>
            <span>{cur.description}</span>
            <Image src={pathImage} width={180} height={180} alt='product' />
          </S.Card>
        );
      })}
    </S.WrapperMobile>
  );
};
