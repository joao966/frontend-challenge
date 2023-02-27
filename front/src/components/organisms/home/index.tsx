"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import * as S from "@/style/components/home/organisms";

export default function OrganismHome() {
  return (
    <S.Wrapper>
      <motion.h1
        animate={{ x: [350, -20, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          ease: [0.5, 0.71, 1, 1.5],
        }}
      >
        CAPPUTEENO
      </motion.h1>
      <Link href="/catalog">
        <S.Button>
            Ir para o site
        </S.Button>
      </Link>
    </S.Wrapper>
  );
}
