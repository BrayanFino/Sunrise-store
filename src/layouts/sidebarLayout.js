import React, { Fragment, useContext } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { LoginContext } from "@/context/login";
import { SidebarMenu } from "@/components/admin/SidebarMenu";

export const SidebarLayout = ({ children }) => {
  const { localSession } = useContext(LoginContext);
  const handleCloseSession = () => {
    localStorage.removeItem("session");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      {localSession?.rolId === "ae8b3d2d-3dac-4fe1-9d3d-f2f91661de47" ? (
        <Grid templateColumns="auto 1fr">
          <SidebarMenu closeSession={handleCloseSession} />
          <Box>{children}</Box>
        </Grid>
      ) : (
        <Box>{children}</Box>
      )}
    </Fragment>
  );
};
