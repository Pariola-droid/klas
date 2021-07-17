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
                        <div className={styles.F}>
                            <span className={styles.border}>
                                <span className={styles.circle}>
                                    <span className={styles.dot}>
                                    </span>
                                </span>
                            </span>                            
                        
                            <div className={styles.Fright}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p>
                                    Create your own<br /> online school and list your classes
                                </p>
                            </div>                            
                        </div>

                        <div className={styles.F}>                        
                           <span className={styles.border}>
                                <span className={styles.circle}>
                                    <span className={styles.dot}>
                                    </span>
                                </span>
                            </span>

                            <div className={styles.Fright}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                <p>
                                    Share your class link and start receiving bookings instantly
                                </p>
                            </div>                            
                        </div>

                        <div className={styles.F}>                        
                            <span className={styles.border}>
                                <span className={styles.circle}>
                                    <span className={styles.dot}>
                                    </span>
                                </span>
                            </span>

                            <div className={styles.Fright}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <p>
                                    Host a<br /> great class on Zoom 
                                </p>
                            </div>                   
                        </div>
                    </div>
                </section>

                <section className={styles.objectives}>
                    <div className={styles.Owrap}>
                    </div>
                </section>

            </div>
        )
    }
}

export default KlasHome;