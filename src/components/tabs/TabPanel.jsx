import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import aboutApi from "../about/aboutApi";
import React from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState(props.api);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "MaxContent",
          padding: "5rem 0",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {tabs.map((tab, index) => (
            <Tab
              style={{ width: "30vw", fontSize: "0.6rem" }}
              key={tab.id}
              label={tab.title}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        {tabs.map((tab, index) => (
          <TabPanel
            style={{ width: "70vw" }}
            value={value}
            index={index}
            key={tab.id}
          >
            <Typography>{tab.content}</Typography>
          </TabPanel>
        ))}
      </Box>
    </>
  );
}
