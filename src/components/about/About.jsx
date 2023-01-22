import TabPanel from "../tabs/TabPanel";
import aboutApi from "./aboutApi";

export default function About() {
  return (
    <>
      <div>
        <img
          style={{ width: "100%", height: "60vh", objectFit: " cover" }}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="img"
        />
      </div>
      <TabPanel api={aboutApi}/>;
    </>
  );
}
