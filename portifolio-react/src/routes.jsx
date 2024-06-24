import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre/index'
import Projetos from './Pages/Projetos/index'
import Contatos from './Pages/Contatos/index'
import Page404 from './Pages/Page404/index'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Container from './Components/Container'
import PageBase from './Pages/PaginaBase'

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes