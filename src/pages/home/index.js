import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Navbar from '../../components/home/Navbar'
import Footer from '../../components/home/Footer'
import boardIMG from "../../assets/images/dashboard.png"

import styles from '../../styles/home/index.module.scss'

class KlasHome extends Component{
    render(){
        return(
            <div>
                <Navbar />

                <main>
                    <header className={styles.header}>
                        <div className={styles.Hwrap}>
                            <div className={styles.Htext}>
                                <h2>
                                    A Remote Teaching Tool For Online Classes
                                </h2>
                                <p>
                                    Run engaging online classes with built-in support for payment processing and student management. 
                                </p>
                                <a href="https://web.elpisacademy.us/#/">
                                    Get started
                                </a>
                            </div>

                            <img src={boardIMG} alt="" />
                        </div>
                    </header>

                    <section className={styles.features}>        
                        
                        <div className={styles.Fwrap}>
                            <div className={styles.Ftag}>
                                how it works
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
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p>
                                        Plan and create your<br />class.
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
                                        Share the link to your class and get bookings instantly.
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
                                        Host a great online<br /> class.
                                    </p>
                                </div>                   
                            </div>
                        </div>
                    </section>

                    <section className={styles.objectives}>
                        <div className={styles.Owrap}>
                            <div className={styles.Otext}>
                                <p>
                                    why Klas
                                </p>
                                <h2>
                                    Remote teaching made easy.
                                </h2>
                            </div>

                            <div className={styles.objWrap}>
                                <div className={styles.obj}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Seamlessly<br /> integrated third-party tools
                                        </h3>
                                        <p>
                                            We integrate with all your favourite tools like Zoom, Calendly, Slack, etc to enhance the teaching experience.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.obj}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Advanced<br /> instructor's dashboard
                                        </h3>
                                        <p>
                                            Track your bookings, earnings and engagements, manage your classes and optimize the performance of your classes.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.obj}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Secure<br /> online payments
                                        </h3>
                                        <p>
                                            Accept payments online with Paystack or Stripe. Klas only supports NGN and USD for now, but we plan to support more currencies as we expand globally.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.obj}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Access to<br /> our community/resources
                                        </h3>
                                        <p>
                                            Connect with other instructors in our community and access valuable resources to help you host engaging online classes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.more}>
                        <div className={styles.Mwrap}>
                            <div className={styles.Mtext}>
                                <h2>
                                    Everything you need to run online classes efficiently.
                                </h2>
                            </div>

                            <div className={styles.moreWrap}>
                                <div className={styles.mor}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Payment processing
                                        </h3>
                                    </div>
                                </div>

                                <div className={styles.mor}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Live conferencing
                                        </h3>
                                    </div>
                                </div>

                                <div className={styles.mor}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Calendar & Event management
                                        </h3>
                                    </div>
                                </div>

                                <div className={styles.mor}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Student management
                                        </h3>
                                    </div>
                                </div>

                                <div className={styles.mor}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Content library
                                        </h3>
                                    </div>
                                </div>

                                <div className={styles.mor}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>

                                    <div className={styles.text}>
                                        <h3>
                                            Integrated messaging platform
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.pricing}>
                        <div className={styles.pWrap}>
                            <div className={styles.pText}>
                                <h2>
                                    Simple, fair pricing.
                                </h2>
                                <p>
                                    Klas only makes money when you do.
                                </p>
                            </div>

                            <div className={styles.price}>
                                <div className={styles.priceH}>
                                    <h1>5% + NGN 100</h1>
                                    <p>For Paid Classes</p>
                                </div>

                                <ul>
                                    <li>
                                        <p>Unlimited free classes</p>
                                    </li>
                                    
                                    <li>
                                        <p>Unlimited paid classes</p>
                                    </li>
                                    
                                    <li>
                                        <p>Easy-to-use Dashboard</p>
                                    </li>
                                    
                                    <li>                               
                                        <p>Recurring classes</p>
                                    </li>
                                    
                                    <li>                                
                                        <p>Slack integration</p>
                                    </li>
                                    
                                    <li>                                
                                        <p>Cross-border transactions.</p>
                                    </li>
                                    
                                    <li>                                
                                        <p>Zoom & Google meet integration</p>
                                    </li>
                                    
                                    <li>                                
                                        <p>Content library for ebooks, courses etc.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className={styles.cta}>
                        <div className={styles.ctaWrap}>
                            <div className={styles.ctaText}>
                                <p>
                                    Try Klas Now!
                                </p>
                                <h2>
                                    Start monetizing your knowledge with Klas.
                                </h2>
                            </div>

                            <div className={styles.ctaLink}>
                                <a href="https://web.elpisacademy.us/#/">
                                    get started
                                </a>
                            </div>
                        </div>
                    </section>                
                </main>
                <Footer />

            </div>
        )
    }
}

export default KlasHome;