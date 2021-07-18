import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import NavOther from '../../components/home/NavOther'
import Footer from '../../components/home/Footer'

import styles from '../../styles/faq/faq.module.scss'

class Faq extends Component{
    render(){
        return(
            <div>
                <NavOther />

                <header className={styles.header}>
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </header>
                
                <section className={styles.faqSect}>
                    <div className={styles.faqWrap}>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Who can use Klas?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    Online educators and creators in Africa
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    How are live classes hosted on Klas?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    We fully integrated with Zoom, but you’re able to link to any third-party conferencing link that you would like.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    What is a live online learning program?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    A live online learning program is any educational program that is delivered in a real-time, virtual environment.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Differences - an online course & a live online learning program?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    Online course require students to go through hours of pre-recorded videos on their own time. Live-online programs come built-in with live sessions and a community. We’ve found that these live programs are 10x engagements and earn 3x more revenue than traditional online courses.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    What can you use Klas for?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                    You can use Klas to host any type of live online program such as live online classes, group coaching, etc. We specialize in single or recurring classes, but not cohorts yet.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Can I customize the experience?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                    Yes, but only pro account users can fully white-label their experience with a custom domain, color scheme, and branding for a fee of $20/month.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    How much does it cost?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     It’s completely free to use, we only charge 10% commission on every booking.
                                </p>
                            </div>
                        </div>                                   

                    </div>
                </section>

                <section className={styles.contact}>
                    <h1>
                        Would you need any further help?
                    </h1>

                    <a href="mailto:hello@tryklas.com">
                        contact support
                    </a>
                </section>

                <Footer />

            </div>
        )
    }
}

export default Faq;