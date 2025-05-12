import { useState } from "react";
import { Navbar } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { Link, useLocation } from "react-router-dom";
import { sidebarStyle } from "./Sidebar.styles";

const linksMockdata = ["Home", "Dashboard", "Analytics", "Vehicles"];

export default function Sidebar() {
  const { classes, cx } = sidebarStyle();
  const location = useLocation();
  const pathWithoutLeadingSlash = location.pathname.substring(1);
  const [activeLink, setActiveLink] = useState<string>(pathWithoutLeadingSlash);

  const links = linksMockdata.map((link) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link,
      })}
      to={link === "Home" ? "/" : link}
      onClick={() => {
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </Link>
  ));

  return (
    <Navbar display={"flex"} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
