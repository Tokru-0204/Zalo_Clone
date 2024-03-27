import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  IconButton,
  Box,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Nav_Buttons, Profile_Menu } from "../../data";

const SideBar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "#0091ff",
        boxShadow: "0px 0px 2px rgba(0,0,0,25)",
        height: "100vh",
        width: "64px",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        sx={{ height: "100%" }}
        spacing={2.5}
        justifyContent={"space-between"}
      >
        <Stack spacing={3} alignItems={"center"}>
          <Stack>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 48,
                width: 48,
                borderRadius: "50%",
              }}
            >
              <Avatar
                sx={{ width: 48, height: 48 }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                src={faker.image.avatar()}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                <Stack spacing={1} px={1}>
                  {Profile_Menu.map((el) => (
                    <MenuItem onClick={handleClick}>
                      <Stack
                        sx={{ width: 100 }}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <span>{el.title}</span>
                        {el.icon}
                      </Stack>
                    </MenuItem>
                  ))}
                </Stack>
              </Menu>
            </Box>
          </Stack>

          <Stack direction="column" alignItems="center" spacing={3}>
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: "64px",
                  }}
                >
                  <IconButton
                    sx={{
                      fontSize: 28,
                      width: "max-centent",
                      color: "#fff",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{
                    fontSize: 28,
                    width: "max-centent",
                    color: "#fff",
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}
          </Stack>
        </Stack>
        <Stack>
          <Divider sx={{ width: "48px" }} />
          {selected === 3 ? (
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
                width: "64px",
              }}
            >
              <IconButton
                sx={{ fontSize: 28, width: "max-content", color: "#fff" }}
              >
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(3);
              }}
              sx={{ fontSize: 28, width: "max-content", color: "#fff" }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
