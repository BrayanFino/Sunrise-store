import { Flex } from "@chakra-ui/react";
import { AdvantageItem } from "../AdvantageItem";

export const Advantage = () => {
  const advantages = [
    {
      title: "Envíos gratis",
      description: "On all order or order above $100",
      img: "/svg/truck.svg",
    },
    {
      title: "Compras seguras",
      description: "On all order or order above $100",
      img: "/svg/safe.svg",
    },
    {
      title: "Soporte 24/7",
      description: "On all order or order above $100",
      img: "/svg/support.svg",
    },
  ];
  return (
    <Flex justifyContent="space-between" margin="2rem 0">
      {advantages.map((advantage, i) => (
        <AdvantageItem key={i} advantage={advantage} />
      ))}
    </Flex>
  );
};
