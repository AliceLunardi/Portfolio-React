import Container from '../../Components/Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <>
        <Container>
        <div className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span className={styles.nome}>Alice Lunari</span> <br />
                    Desenvolvedora Front-end
                </p>
                <Link to="/Sobre" className={styles.btn}>
                    Saiba mais sobre mim!
                </Link>
            </div>
            <div className={styles.figureContainer}>
                <img className={styles.img_home} src="https://steamuserimages-a.akamaihd.net/ugc/1848161405074028104/F9715C15103A7E4F45C255FD0CF5CF7D5030D646/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Imagem de Home" />
            </div>
        </div>
        </Container>
        </> 
    )
}

export default Home