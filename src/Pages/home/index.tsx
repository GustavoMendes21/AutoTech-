import { SignoutButton } from '../../components/SignoutButton'
import logo from '../../assets/AutoTechLogo.svg'
import { Header, Container } from './styles'
import { FiSearch } from "react-icons/fi";

export function Home({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      <Header>
        <a href="/">
          <img src={logo} alt="Logo AutoLuby" />
        </a>
        <div className="input-search">
          <input type="search" name="searchInput" id="searchInput" />
          <FiSearch size={20}/>
        </div>
        <SignoutButton/>
      </Header>
      <Container>{children}</Container>

    </>
  )
}