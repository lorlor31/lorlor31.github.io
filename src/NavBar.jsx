import React, { useEffect } from 'react';

function NavBar() {
  
return (

<div className="navbar bg-violet-800 text-neutral-100 shadow-sm border-t border-b border-neutral-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-poppins" >LAURE SENG</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Projets perso</summary>
          <ul className="bg-base-100 rounded-t-none p-2 text-violet-800 z-50 ">
            <li><a href="https://bloglor.lorlor.site/">Blog</a></li>
            <li><a href="https://lorlor31.github.io/Memento/">Memento</a></li>
            <li><a href="https://lorlor31.github.io/Advent-Calendar/">Advent</a></li>
            <li><a href="https://lorlor-fiches.surge.sh/">Fiches Dev Web </a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Contributions </summary>
          <ul className="bg-base-100 rounded-t-none p-2 text-violet-800 z-50 ">
            <li><a href="https://senior-sur-mesure.fr/">Sénior sur Mesure</a></li>
            <li><a href="https://sitedigital.fr/">Site Digital</a></li>
            <li><a href="https://armoireplus.fr/">Armoire Plus</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
)
}

export default NavBar ;
