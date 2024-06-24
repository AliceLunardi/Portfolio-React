import styles from './Sobre.module.css'
import avatar from './path/avatar.jpg'; 
import html from './path/html.png';
import css from './path/css.png';
import js from './path/js.png';
import react from './path/react.png';

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Eu sou <span>Alice Lunadi</span> <br />
                    <strong>Desenvolvedora Front-end</strong> </p>

                    <p>Estudo no Cotemig para ter minha formação como programadora.</p>

                    <p>Dedico meu tempo para aprender desenvolvimento web/mobile.</p>

                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                </div>
            </div>

        </section>
    )
}

export default Sobre