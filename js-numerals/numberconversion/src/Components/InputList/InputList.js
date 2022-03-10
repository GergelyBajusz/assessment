import React from "react";
import { Box, Typography } from "@mui/material";
import InputField from "../InputField/InputField";
import { PrimaryColor, PrimaryColorLight } from "../../Constants/colors";
import { useInputList } from "./useInputList";

function InputList() {
  const { inputValue, outputValue, handleInputChange } = useInputList();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
        "@media (max-width: 690px)": {
          flexDirection: "column",
          marginTop: "12px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "2.4rem",
          fontWeight: 600,
          textAlign: "center",
          color: PrimaryColorLight,
          textShadow: `2px 4px 2px ${PrimaryColor}`,
          "@media (max-width: 690px)": {
            fontSize: "1.4rem",
            textShadow: `1px 2px 2px ${PrimaryColor}`,
          },
        }}
      >
        {`Convert a number into it's equivalent alphabet form!`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10%",
          paddingRight: "10%",
          marginTop: "60px",
          "@media (max-width: 690px)": {
            flexDirection: "column",
            marginTop: "12px",
            paddingRight: 0,
          },
        }}
      >
        <InputField
          id="numberInputField"
          heading={"Type your number into the field:"}
          type={"number"}
          value={inputValue}
          label={"number"}
          handleChange={(e) => handleInputChange(e)}
        />
        <InputField
          id="numberOutputField"
          heading={"Your alphabet number is:"}
          type={"text"}
          value={outputValue}
          label={"alphabet"}
          disabled
        />
      </Box>
    </Box>
  );
}

export default InputList;
