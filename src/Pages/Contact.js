import { useNavigate } from "react-router-dom"
import NavBar from "../Components/NavBar"
const ContactPage = () => {
     navigate = useNavigate()
    return (
        <div>
        <NavBar/>
            <h1>Contact Page</h1>
  {/* <input type="text" id="fname" name="fname">
  <input type="text" id="lname" name="lname">
  <input type="text" id="email"> */}
        </div>
    )
}
export default ContactPage