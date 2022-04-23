import { SignoutButton } from '../../components/SignoutButton'
import logo from '../../assets/logo.svg'
import { Header, Container } from './styles'
import { FiSearch } from "react-icons/fi";

export function Home({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      <Header>
        <img src={logo} alt="Logo AutoLuby" />
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