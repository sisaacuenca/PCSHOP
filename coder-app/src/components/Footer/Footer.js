import { BsLinkedin } from "react-icons/bs"
import { AiOutlineCopyrightCircle} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="d-flex justify-content-center border-top">
            <AiOutlineCopyrightCircle/>2022 Santiago Isaac Cuenca - <a href="https://www.linkedin.com/in/sisaacuenca/" ><BsLinkedin/></a> - Todos los Derechos reservados
        </div>
    )
}
export default Footer