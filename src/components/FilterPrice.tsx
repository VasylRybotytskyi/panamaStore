import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack, TextField, Typography } from "@mui/material";

const minDistance = 1000;

export default function FilterPrice({ setPrice }) {
  const [tempValue, setTempValue] = React.useState<number[]>([1, 9999]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setTempValue([
        Math.min(newValue[0], tempValue[1] - minDistance),
        tempValue[1],
      ]);
    } else {
      setTempValue([
        tempValue[0],
        Math.max(newValue[1], tempValue[0] + minDistance),
      ]);
    }
  };

  const handleApply = () => {
    setPrice(tempValue);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              bgcolor: "#F2F3F8",
              color: "#000",
              fontSize: "12px",
              "&:hover": {
                bgcolor: "#cccccc",
              },
            }}
          >
            Ціна <KeyboardArrowDownIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Stack sx={{ px: 2, pt: 1 }} gap={1}>
              <Box display="flex">
                <Box display="flex" flexGrow={1}>
                  <TextField
                    label="Від"
                    type="text"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={tempValue[0]}
                    onChange={(e) => {
                      setTempValue([
                        Math.min(Number(e.target.value), tempValue[1]),
                        tempValue[1],
                      ]);
                    }}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        height: "30px",
                        width: "50px",
                        padding: "0 ",
                      },
                    }}
                  />
                  <Typography>-</Typography>
                  <TextField
                    label="До"
                    type="text"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={tempValue[1]}
                    onChange={(e) => {
                      setTempValue([
                        tempValue[0],
                        Math.max(
                          tempValue[0],
                          Math.min(9999, Number(e.target.value))
                        ),
                      ]);
                    }}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        height: "30px",
                        width: "50px",
                        padding: "0 ",
                      },
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  style={{
                    maxWidth: "40px",
                    maxHeight: "30px",
                    minWidth: "40px",
                    minHeight: "30px",
                  }}
                  onClick={handleApply}
                >
                  Ок
                </Button>
              </Box>
              <Box sx={{ width: 160 }}>
                <Slider
                  value={tempValue}
                  onChange={handleChange}
                  disableSwap
                  min={1}
                  max={9999}
                  size="small"
                />
              </Box>
            </Stack>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
