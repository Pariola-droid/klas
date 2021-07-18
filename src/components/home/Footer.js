import React, { Component } from "react"
import { Link } from 'react-router-dom'

import styles from "../../styles/home/index.module.scss";
import logo from "../../assets/images/klas-logo.png"

class Navbar extends Component{   

    render(){
        return(
            <div>
                <footer>
                    <div className={styles.footWrap}>
                        
                        <div className={styles.footItem}>
                            
                            <div className={styles.Item}>
                                <span>
                                    <img src={logo} alt="" />
                                    <h1>Klas.</h1>
                                </span>

                                <p>
                                    Remote teaching platform for creating engaging online classes anywhere, anytime. it's free and easy to use.
                                </p>
                            </div>

                            <div className={styles.Item}>
                                <h3 className={styles.iHead}>
                                    Legal
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><a href="#0">Term of use</a></li>
                                    <li><a href="#0">privacy policies</a></li>
                                </ul>
                            </div>

                             <div className={styles.Item}>
                                 <h3 className={styles.iHead}>
                                    Contact
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><a href="mailto:hello@tryklas.com">hello@tryklas.com</a></li>
                                </ul>
                            </div>

                            <div className={styles.Item}>
                                 <h3 className={styles.iHead}>
                                    Support
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><Link to="/faq">FAQs</Link></li>
                                    <li><a href="#0">Blogs</a></li>
                                </ul>
                            </div>                           

                            <div className={styles.Item}>
                                 <h3 className={styles.iHead}>
                                    Connect with us
                                </h3>

                                <ul className={styles.Flist}>
                                    <li><a href="#0"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                    <li><a href="#0"><ion-icon name="logo-youtube"></ion-icon></a></li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.footCopy}>
                            <p>
                                Copyright © 2021  •  All Rights Reserved
                            </p>

                            <a href="#0">
                                Back to Top
                            </a>
                        </div>
                        
                    </div>
                </footer>
            </div>
        );
    }
}

export default Navbar;