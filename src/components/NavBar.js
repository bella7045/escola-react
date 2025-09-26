import React from "react";

export default function NavBar() {
    return(
        <nav className="flex justify-center gap-6 bg-gray-200 p-4 shadon-md">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#escola" className="hover:text-blue-600">sobre a escola</a>
        <a href="#mim" className="hover:text-blue-600">sobre mim</a>
        </nav>
    );
}