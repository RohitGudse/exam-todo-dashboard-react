
import React from "react";

const Navbar = () => {
  const navigationItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Exams",
      path: "/exams",
    },
    {
      id: 3,
      title: "Tasks",
      path: "/tasks",
    },
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <h2>MyDashboard</h2>
      </div>

      <nav className="navigation-menu">
        <ul>
          {navigationItems.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.path}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
