import React, {Component} from "react"
import styles from "../styles/home/navOther.module.scss";
import logo from "../../assets/images/klas-logo.png"

class Navbar extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar}>
                    <div className={styles.navInner}>
                        <div className={styles.navLogo}>
                            <img src={logo} alt="" />
                            <h1>Klas.</h1>
                        </div>
                        
                        <a href="0#" className={styles.get}>
                            get started
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;