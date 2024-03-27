import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleSidebar, updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 356, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: (theme.palette.mode = "light"
              ? "#F8FAFF"
              : theme.palette.background),
          }}
        >
          <Stack
            sx={{ height: "100%", p: 3 }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 48, width: 48 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {"+084 366 516 292"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Doc</Typography>
            <Button
              onClick={() => {
                dispatch(updateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.image()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Hao Doan</Typography>
              <Typography variant="caption">
                owl, Parrot, Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button startIcon={<Prohibit />} fullWidth variant="outlined">
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth variant="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
