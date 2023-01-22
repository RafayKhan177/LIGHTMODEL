import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <img
          style={{ width: "100%", height: "60vh", objectFit: " cover" }}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="img"
        />
      </div>

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
          sx={{ borderRight: 1, borderColor: "divider", width: "30vw" }}
        >
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Lorem ipsum dolor sit amet."
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Item Three"
            {...a11yProps(2)}
          />
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Item Four"
            {...a11yProps(3)}
          />
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Item Five"
            {...a11yProps(4)}
          />
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Item Six"
            {...a11yProps(5)}
          />
          <Tab
            style={{ fontSize: "0.7rem" }}
            label="Item Seven"
            {...a11yProps(6)}
          />
        </Tabs>
        <TabPanel style={{ width: "70vw" }} value={value} index={0}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium fugit cum itaque et culpa, vero
          laudantium in atque id magni voluptatum, sunt, officiis iusto libero
          quod dolorum nisi pariatur! Ipsam sit, tenetur quae eaque quasi
          maiores facere deleniti perferendis iusto ea dolorum officia
          aspernatur pariatur ipsum omnis fuga. Tempora delectus atque
          temporibus doloremque praesentium adipisci, dignissimos repellat
          consequuntur impedit eos voluptas sapiente ea aut commodi architecto
          vitae accusamus placeat nobis magni culpa necessitatibus ipsam.
          Provident explicabo aspernatur recusandae aperiam voluptas id corrupti
          nemo laborum dicta perspiciatis, sapiente alias dolore doloribus quia
          hic ipsam molestiae minus iure excepturi? Modi, maiores? Ipsam,
          facilis? Consectetur corrupti harum rerum ullam alias dolores
          accusamus error? Natus eaque inventore voluptas, aperiam nisi
          accusamus assumenda! Eum aperiam ipsa vero. Iure a ea esse debitis!
          Possimus, consequuntur non expedita quae quis officiis, est fugiat
          delectus amet quos eveniet nam nihil ipsa earum sint? Qui cumque
          minima beatae inventore quibusdam ipsa? Necessitatibus molestias
          architecto quis sunt temporibus quasi exercitationem nam unde libero?
          Amet, expedita possimus quibusdam nostrum laboriosam eos deleniti
          explicabo, aperiam quaerat velit quis non quia vel excepturi alias
          tenetur? Consectetur odio illo mollitia dolorum deleniti saepe
          expedita rem sed nulla, aliquam quos libero, voluptatibus sequi
          praesentium! Eveniet et ut perspiciatis! Reprehenderit minus fuga
          quasi? Facere ex iste minus. Numquam, maxime molestias dolore vel vero
          id, quaerat sequi, ipsa veritatis cupiditate quibusdam expedita. Iste
          impedit consequuntur error eveniet laborum, cum omnis aperiam labore
          natus dolorum commodi veniam eaque necessitatibus libero ut, quisquam
          optio voluptatem quaerat ex! Dolores, eaque optio, sequi nobis nisi
          omnis itaque voluptatem, nam fuga hic reiciendis? Ipsum hic temporibus
          quas facere beatae maxime dolor dolore, voluptas consequuntur soluta
          sit animi a modi omnis, ex, mollitia minima recusandae fuga magnam.
          Doloribus earum, ab nam voluptate quos minima sed consectetur,
          excepturi ex facilis rerum placeat incidunt odio.
        </TabPanel>
        <TabPanel style={{ width: "70vw" }} value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel style={{ width: "70vw" }} value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel style={{ width: "70vw" }} value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel style={{ width: "70vw" }} value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel style={{ width: "70vw" }} value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel style={{ width: "70vw" }} value={value} index={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          dignissimos molestias nisi cupiditate, eaque temporibus excepturi
          ratione ducimus, porro natus asperiores. Fugit tempora nostrum
          reiciendis debitis nam quae ad temporibus iure ipsam nobis nulla in,
          cum, molestiae quidem non odio vel asperiores facere deserunt eum
          voluptatibus quo qui voluptatum. Inventore laboriosam corrupti aliquam
          consequatur totam ipsa explicabo! Eum ullam officiis quaerat
          repudiandae nostrum hic minima praesentium vero atque cupiditate ex
          itaque, dolorem dignissimos recusandae temporibus dolores eius
          assumenda, neque consectetur voluptates quidem! Quae itaque provident
          quaerat sequi debitis hic velit iusto illum ipsum quas aliquid minima
          eum, fuga perferendis totam, neque, rerum reiciendis a cum porro
          accusamus beatae molestiae ullam? Blanditiis voluptate, nihil
          pariatur, exercitationem a quidem magnam mollitia tenetur fugiat
          tempora deserunt ducimus quaerat? Ipsum, consequatur, numquam adipisci
          nam quisquam pariatur molestiae eum repellat odit, alias temporibus
          illum autem nisi officia! Dicta veritatis blanditiis fuga unde
          suscipit exercitationem ad aliquid ab, officia laudantium magnam natus
          cumque error sequi cum quae libero repellat, voluptates ullam totam
          consectetur. Magni, magnam exercitationem ut officiis alias, neque cum
          soluta quos eius enim itaque placeat, harum tenetur nulla aperiam
          reprehenderit. Cumque itaque laborum sapiente omnis ratione assumenda
          reiciendis dolorem distinctio, laboriosam perferendis pariatur at
          libero sint aliquam veritatis aperiam quaerat perspiciatis quisquam
          possimus quam est. Enim quisquam molestiae voluptate neque tenetur
          quis quas voluptates corrupti reprehenderit consequuntur doloremque,
          illo ad, quaerat laboriosam quo veniam fugiat recusandae esse cum
          asperiores sit aliquam nihil odio? In dignissimos alias rerum dicta,
          facere temporibus totam qui animi tenetur labore id sint accusantium
          nam aut, perspiciatis provident? Laboriosam molestiae maiores soluta?
          Aspernatur, labore magnam tempore nihil exercitationem necessitatibus
          officiis commodi, dolor fuga doloremque repellat iusto maiores quia
          debitis amet odit reprehenderit veritatis quidem minus optio dicta
          harum repellendus ipsa aperiam? Quod, placeat beatae? Minima, sequi
          dolores eligendi corrupti autem rerum aliquam et sunt pariatur in
          ratione ipsa explicabo. Aperiam provident, harum repellendus corrupti
          voluptatem possimus consequatur ex incidunt architecto corporis iure
          magnam facere praesentium eius dolorem ea sed commodi aspernatur dicta
          dignissimos optio ratione adipisci molestiae accusantium. Dolor ipsam
          modi, corrupti fugit reiciendis quos voluptate, assumenda ab veniam
          dignissimos voluptatem vero recusandae totam impedit sed quae autem
          qui velit nesciunt quo dolorum omnis! Optio at temporibus voluptatum
          obcaecati quos totam iure dolores atque ad illo tempore vero natus,
          quibusdam porro perferendis, laudantium explicabo et. Eos iusto labore
          modi blanditiis odit hic autem dolorum magnam, atque eaque ex, amet
          quia illo voluptas impedit veritatis facere commodi vel accusamus
          quisquam! Distinctio blanditiis placeat, obcaecati omnis dolores
          perferendis a ullam earum eos, illum et error exercitationem, commodi
          libero quaerat esse minima ipsum id modi labore. Tenetur in ex natus
          quidem quae sapiente voluptatibus, aperiam distinctio doloremque fuga
          ipsa voluptatum quos qui consectetur architecto at unde numquam
          corporis officiis odio placeat repellendus. Nulla praesentium dolorem
          dolore aut nesciunt aperiam. Eos vitae consequatur recusandae dolorum
          placeat earum odit velit, rerum similique molestiae, voluptate
          deserunt excepturi! Earum accusamus quo minima rerum quam cum fuga
          repellendus id, voluptatem consequatur molestiae tenetur impedit
          blanditiis, modi pariatur est.
        </TabPanel>
      </Box>
    </>
  );
}
