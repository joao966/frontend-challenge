"use client";
import { Wrapper } from "@/style/components/home/organisms";
import useWindowSize from "@/hooks/useWindowSize";

export default function OrganismHome() {
  const { width } = useWindowSize();

  return <Wrapper>{width && width <= 571 ? "Mobile": "Estamos trabalhando na versão Mobile First"}</Wrapper>;
};
