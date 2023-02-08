import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export default function TemporaryDrawer(props) {
  const { showMenuMobile, setShowMenuMobile, children } = props;

  const toggleDrawer = () => {
    setShowMenuMobile(false);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer open={showMenuMobile} onClose={() => toggleDrawer()}>
          <Box sx={{ width: "270px" }} role="presentation">
            {children}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
