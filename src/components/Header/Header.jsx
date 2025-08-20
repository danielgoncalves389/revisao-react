import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <Link to="/pages/contato">Contato</Link>
        <Link to="/.">Home</Link>
        
        </>
    )
}