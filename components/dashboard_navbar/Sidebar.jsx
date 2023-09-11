import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiLogoutCircleLine, RiDashboardLine } from "react-icons/ri";
import { MdOutlineBedroomParent } from "react-icons/md";
import styles from "../../styles/sidebar.module.scss";
import { useRouter } from "next/router";
import { BsBuildingFillAdd, BsBell } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const routes = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <RiDashboardLine />,
    select: true,
  },
  {
    path: "/admin/add_pg",
    name: "Add PG",
    icon: <BsBuildingFillAdd />,
    select: false,
  },
  {
    path: "/admin/update_room_bed",
    name: "Update Room/Bed",
    icon: <MdOutlineBedroomParent />,
    select: false,
  },
  {
    path: "/admin/staff",
    name: "Staff",
    icon: <FiUsers />,
    select: false,
  },
];

const SideBar = () => {
  const route = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isHover, setIsHover] = useState(false);
  const [notificationHover, setNotificationHover] = useState(false);
  const [notification, setNotification] = useState([
    { notification: "notification about trade" },
    { notification: "notification about campaign" },
    { notification: "notification about clients" },
  ]);

  const handleHoverNotifi = () => {
    setNotificationHover(true);
  };

  const handleLeaveNotifi = () => {
    setNotificationHover(false);
  };
  const Selectroute = (e) => {
    routes.forEach((el) => {
      el.select = el.name === e.name ? true : false;
    });
  };

  useEffect(() => {
    routes.forEach((el) => {
      el.select = el.path === route.pathname ? true : false;
    });
  }, []);

  return (
    <>
      <div
        style={{ position: "relative" }}
        animate={{
          width: isOpen ? "220px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 20,
          },
        }}
        className={styles.sidebar}
      >
        <div className={styles.nav_logo_box}>
          <img
            src="../../imgs/man.png"
            alt="logo"
            className={styles.nav_logo}
            onClick={() => route.push("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <section className={styles.routes}>
          {routes.map((route, index) => {
            return (
              <Link
                href={route.path}
                key={index}
                onClick={() => Selectroute(route)}
                className={styles.link}
                aria-expanded={route.select}
              >
                <div className={styles.icon}>{route.icon}</div>
                {route.name}
              </Link>
            );
          })}
        </section>
        <div style={{display:"flex",justifyContent:"center"}}>
          <button
            className={styles.logout}
            style={{ position: "absolute", bottom: "2%" }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
