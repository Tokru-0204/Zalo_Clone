import React from "react";
import {
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  Sticker,
  Image,
  LinkSimple,
  Crop,
  IdentificationCard,
  Alarm,
  CheckSquare,
  Smiley,
  At,
} from "phosphor-react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    // padingTop: "-20px",
    paddingBottom: "25px",
  },
}));
const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,25)",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <IconButton>
          <Sticker />
        </IconButton>
        <IconButton>
          <Image />
        </IconButton>
        <IconButton>
          <LinkSimple />
        </IconButton>
        <IconButton>
          <Crop />
        </IconButton>
        <IconButton>
          <IdentificationCard />
        </IconButton>
        <IconButton>
          <Alarm />
        </IconButton>
        <IconButton>
          <CheckSquare />
        </IconButton>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <StyledInput
          fullWidth
          placeholder="Nhập @, tin nhắn tới {}..."
          variant="filled"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
                <IconButton>
                  <At />
                </IconButton>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontweight: 600,
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingLeft: 2,
                    }}
                  >
                    GỬI
                  </Typography>
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
