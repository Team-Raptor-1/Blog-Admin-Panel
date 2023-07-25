import React from 'react';
import '../styles/SideBar.css';
import { FiSettings } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { VscOpenPreview } from "react-icons/vsc";
import { BiComment } from "react-icons/bi";
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <section id='SideBar'>
            <div className="SideBarContainer">
                <div className="elements">
                    <BsFillPencilFill />
                    <li><Link id='all' to="/blogpost"><h3>Blog Post</h3></Link></li>
                </div>

                <div className="elements">
                    <ImBook />
                    <li><Link id='all' to="/allblogs"><h3>All Blogs</h3></Link></li>
                </div>


                <div className="elements">
                    <VscOpenPreview />
                    <li><Link id='all' to="/reviews"><h3>Reviews</h3></Link></li>
                </div>


                <div className="elements">
                    <BiComment />
                    <li><Link id='all' to="/comment"><h3>Comments</h3></Link></li>
                </div>

                <div className="elements">
                    <FiSettings />
                    <div className="elements">
                    <BiComment />
                    <li><Link id='all' to="/settings"><h3>Settings</h3></Link></li>
                </div>

                </div>
            </div>
        </section>
    )
}

export default SideBar