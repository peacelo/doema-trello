import React, { useEffect } from 'react';
import M from "materialize-css";
const SideNav = ()=>{

    useEffect( ()=>{
        var elems = document.querySelectorAll('.sidenav');

        var collapsible = document.querySelector('.collapsible');



        var options = {
            outDuration: 200,
            edge: 'left'
        }
        var options2 = {
            accordion: true
        }

        M.Collapsible.init(collapsible, options2);

        M.Sidenav.init(elems, options);
    });

return (
    <>
  <ul id="slide-out" className="sidenav sidenav-fixed">
    <li><div className="user-view">
      <div className="background">
        <img src="images/office.jpg"/>
      </div>
      <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span className="white-text name">Cadernos</span></a>
      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div>
    </li>

    <ul className="collapsible">
    <li>
      <div className="collapsible-header bold"><i className="material-icons">filter_drama</i>Cadernos</div>
      <div className="collapsible-body">
          <ul>
            <li><i className="material-icons">filter_drama</i>Executivo</li>
            <li><i className="material-icons">filter_drama</i>Terceiros</li>
          </ul>
      </div>
    </li>
  </ul>

    <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </>
    
)

}



export default SideNav;