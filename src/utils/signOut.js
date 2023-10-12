import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentChatUser } from "../store/Chat/currentChatUserSlice";
import { setCurrentUser } from "../store/User/currentUserSlice";


function SignOutClean() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    try {
      dispatch(setCurrentChatUser(null));
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.log(error);
    }
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export { SignOutClean };