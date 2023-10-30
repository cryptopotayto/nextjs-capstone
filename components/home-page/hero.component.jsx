import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/tay.jpg' alt='Image Showing Tay' width={300} height={300} />
            </div>
            <h1>Hi, I'm Tay</h1>
            <p>I am a self-directed web developer -- focused on React and React frameworks</p>
        </section>
    )
}

export default Hero;