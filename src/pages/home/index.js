import React, {Component} from 'react'
import Navbar from '../../components/home/Navbar'
import boardIMG from "../../assets/images/elpis-1.png"

import styles from '../../styles/home/index.module.scss'

class KlasHome extends Component{
    render(){
        return(
            <div>
                <Navbar />

                <header className={styles.header}>
                    <div className={styles.Hwrap}>
                        <div className={styles.Htext}>
                            <h2>
                                A Remote Teaching Tool For Online Classes
                            </h2>
                            <p>
                                Run classes on Zoom with built-in support for online payments and student management. Ideal for online educators and creators in Africa.
                            </p>
                            <a href="#0">
                                Get started
                            </a>
                        </div>

                        <img src={boardIMG} alt="" />
                    </div>
                </header>

                <section className={styles.features}>
                    <div className={styles.Fwrap}>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default KlasHome;