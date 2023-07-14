import React from "react";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function Trial() {
  const ModeDarkMode = useSelector((state) => state.DarkMode.mode);
  return (
    <Typography variant="div" component="div" sx={{ p: 3 }}>
      <Typography
        variant="div"
        component="div"
        className="textColor"
        sx={{
          background: !ModeDarkMode ? "#012939" : "#7db00e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ color: "white" }}>
          You have 14 days left in trial
        </Typography>
        <Typography>
          <Button
            sx={{
              background: "#7DB00E",
              color: "white",
              border: "1px solid #7DB00E",
              borderColor: ModeDarkMode ? "black" : "#7db00e",
              padding: "5px 12px",
              fontWeight: "bold",
            }}
          >
            Choose Plan
          </Button>
        </Typography>
      </Typography>
    </Typography>
  );
}

export default Trial;
