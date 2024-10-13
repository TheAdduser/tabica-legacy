import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      &copy; {new Date().getFullYear()} Tabica Created by: Bartosz Wrona
    </footer>
  )
}

export default Footer;