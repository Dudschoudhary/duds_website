import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import Home from "../Home";
import About from "../About";


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
                path:"about",
                Component:About
            }
        ]
    }
])

export default router;