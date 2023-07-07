import React from "react";
import { useRouter } from "next/router";
import { DetailContainer } from "@/containers/DetailContainer";

function Deatil() {
  const router = useRouter();
  return <DetailContainer productId={router.query.id} />;
}

export default Deatil;
