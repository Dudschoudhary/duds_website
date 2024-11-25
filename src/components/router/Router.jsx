import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Projects from "../Projects";
import Contact from "../Contact";


const router = createBrowserRouter([
    {
        path:'/',
        Component:Layout,
        children:[
            {
                path:"",
                Component:Home
            },
            {
                path:"/about",
                Component:About
            },
            {
                path:"/services",
                Component:Services
            },
            {
                path:"/projects",
                Component:Projects
            },
            {
                path:"/contact",
                Component:Contact
            }
        ]
    }
])

export default router;