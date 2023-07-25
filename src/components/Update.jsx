import React from 'react';
import '../styles/Update.css';
import { Link } from 'react-router-dom';

const Update = () => {
    return (
        <section id='update'>

            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Update Blog</h1>


            <div className="from">
                <form action="">


                    <div className="fromContainer">
                        <label htmlFor="">Upload image</label>
                        <input type="file" style={{ border: 'none', width: '195px' }} />
                    </div>

                    <div className="fromContainer">
                        <label htmlFor="">Name of the Blog</label>
                        <input type="text" />
                    </div>


                    <div className="fromContainer">
                        <label htmlFor="">Title of the Blog</label>
                        <input type="text" />
                    </div>

                    <div className="fromContainer">
                        <label htmlFor="">Category of the Blog</label>
                        <input type="text" />
                    </div>



                    <div className="fromContainer" style={{ height: '15vh' }}>
                        <label htmlFor="">Description of the Blog</label>
                        <textarea name="" id="" cols="80" rows="10"></textarea>
                    </div>

                    <div className="btn">
                        <button> <Link style={{textDecoration: 'none', color: 'white'}} to="/allblogs">Update</Link></button>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default Update