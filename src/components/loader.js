import React from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Loader = ({
  customSize = 40,

  suspense = false,
}) => {
  return (
    <Box
      sx={{
        position: suspense ? "absolute" : "relative",
        top: suspense ? "50%" : "auto",
        left: suspense ? "50%" : "auto",
        transform: suspense ? "translate(-50%, -50%)" : "none",
        display: "flex",
        width: suspense ? "100%" : "auto",
        height: suspense ? "100vh" : "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: "blue",
        }}
        size={customSize}
        thickness={4}
        value={100}
      />
      <CircularProgress
        disableShrink
        sx={{
          color: "white",
          animationDuration: "550ms",
          position: "absolute",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={customSize}
        thickness={4}
      />
    </Box>
  );
};

Loader.propTypes = {
  customSize: PropTypes.number,
  suspense: PropTypes.bool,
};

export default Loader;
