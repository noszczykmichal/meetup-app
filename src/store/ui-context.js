import { createContext, useState } from "react";


// const UiContext=createContext({
//     showMobileNavbar
// });


function UiContextProvider(){

    const [isOpen, openNavbar]=useState(false);

    function showNavbar(){
      openNavbar(true);
    }
}