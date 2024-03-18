import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Box } from "@mui/material";

const FilterBar = ({
  nameOption,
  selectedValues,
  setSelectedValues,
  array,
}) => {
  // const [selectedValues, setSelectedValues] = useState([]);

  const handleMenuItemClick = (value) => {
    setSelectedValues((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((val) => val !== value)
        : [...prevSelected, value]
    );
  };

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);

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
                bgcolor: "#cccccc", // Змінюємо колір кнопки на сірий при наведенні
              },
            }}
          >
            {nameOption} <KeyboardArrowDownIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            {array.map(({ name, value, icon }) => (
              <MenuItem
                sx={{
                  bgcolor: selectedValues.includes(value)
                    ? "#F2F3F8"
                    : "initial",
                  fontSize: "14px",
                }}
                key={value}
                onClick={() => handleMenuItemClick(value)}
              >
                <Box display="flex" gap="10px" alignItems="center">
                  {icon}
                  {name}
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default FilterBar;
