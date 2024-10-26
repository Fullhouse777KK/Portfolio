import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import Welcome from "../pages/Welcome";
import Projects from "../pages/Projects";
import Info from "../pages/Info";
import Contacts from "../pages/Contacts";

export const router = createBrowserRouter([
        {path: Paths.welcome, element:<Welcome/> },
        {path: Paths.projects, element:<Projects/> },
        {path: Paths.info, element:<Info/> },
        {path: Paths.contacts, element:<Contacts/> }
])