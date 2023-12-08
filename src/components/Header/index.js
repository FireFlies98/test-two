import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
   return (
      <>
         <header className="header">
            <div>
               <NavLink to="/">
                  <p>home</p>
               </NavLink>
               <NavLink to="/pagetwo">
                  <p>pagetwo</p>
               </NavLink>
            </div>
         </header>
      </>
   );
}
