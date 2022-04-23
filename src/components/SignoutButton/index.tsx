import { Button } from "./styles";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../contexts/auth";

export function SignoutButton() {
  const { signOut } = useAuth()
 
 
  return (
    <Button onClick={() => signOut()}>
      Sair
      <FiLogOut size={20}/>
    </Button>
  )
}