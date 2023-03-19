import React from "react";

interface NavbarItemProps {
  label: string;
}

const Navbaritem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="cursor-pointer text-white transition hover:text-gray-300">
      {label}
    </div>
  );
};

export default Navbaritem;
