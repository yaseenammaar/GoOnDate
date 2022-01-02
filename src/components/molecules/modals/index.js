import ProfileInputs from "./modalComponents/ProfileInputs";
import WithModalWrapper from "./WithModalWrapper";
import Contact from "./modalComponents/Contact";
import PhoneAuth from "./modalComponents/PhoneAuth";
import AboutUs from "./modalComponents/AboutUs";
import More from "./modalComponents/More";
import Notifications from "./modalComponents/Notifications";
import Messages from "./modalComponents/Messages";
import ConnectWallet from "./modalComponents/ConnectWallet";
import DesconnectWallet from "./modalComponents/DesconnectWallet";

export default [
    {
        name: "login",
        component: (props) => (<WithModalWrapper {...props} ><PhoneAuth /></WithModalWrapper>)
    },
    {
        name: "connectwallet",
        component: (props) => (<WithModalWrapper {...props} ><ConnectWallet /></WithModalWrapper>)
    },
    {
        name: "desconnectwallet",
        component: (props) => (<WithModalWrapper {...props} ><DesconnectWallet /></WithModalWrapper>)
    },
    {
        name: "complete_profile",
        component: (props) => (<WithModalWrapper {...props}><ProfileInputs /></WithModalWrapper>)
    },
    {
        name: "contact_us",
        component: (props) => (<WithModalWrapper {...props}><Contact /></WithModalWrapper>)
    },
    {
        name: "about_us",
        component: (props) => (<WithModalWrapper {...props}><AboutUs /></WithModalWrapper>)
    },
    {
        name: "more",
        component: (props) => (<WithModalWrapper {...props}><More /></WithModalWrapper>)
    },
    {
        name: "messages",
        component: (props) => (<WithModalWrapper {...props}><Messages /></WithModalWrapper>)
    },
    {
        name: "notifications",
        component: (props) => (<WithModalWrapper {...props}><Notifications /></WithModalWrapper>)
    }
]