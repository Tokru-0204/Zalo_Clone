import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";

const GeneralApp = () => {
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 385px)",
          backgroundColor: "#F0F4FA",
        }}
      >
        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              return <SharedMessages />;
            case "SHARED":
              return <SharedMessages />;
            default:
              return null;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
