import React from "react";
import { sidebarContent } from "../../constants";

const Sidebar = () => {
  return (
    <div className="col-sm-3">
      <ul class="nav flex-column bg-light h-100">
        {sidebarContent.map((item) => (
          <li class="nav-item border-bottom border-secondary">
            <a class="nav-link text-secondary" href="#">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
