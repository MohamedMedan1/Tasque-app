"use client"
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function BurgerIcon({children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="block sm:hidden border rounded-md hover:bg-background hover:text-primary">
            <HiBars3 size={35} onClick={() => setIsOpen((cur) => !cur)} className={`${isOpen? "rotate-90":"rotate-0"} transition-all`} />
            {isOpen ? children:null}
        </div>
    );
}