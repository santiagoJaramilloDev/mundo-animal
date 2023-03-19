import { OurCommunity } from "../components/pages/blog/OurCommunity";
import { AboutUs } from "../components/pages/home/aboutUs/AboutUs";
import { Services } from "../components/pages/services/Services";
import { Store } from "../components/pages/store/Store";


type JSXComponent = () => JSX.Element;

interface Route {
    path: string,
    Component: JSXComponent,
    name?: string,
    style?: boolean,
    userNavigation?: boolean,
    navBarNavigation?: boolean,
}

export const routes: Route[] = [
    { path: '/', Component: AboutUs},
    // { path: 'aboutUs', Component: AboutUs, name: '¿QUIÉNES SOMOS?', navBarNavigation: true},
    { path: 'ourCommunity', Component: OurCommunity, name: 'NUESTRA COMUNIDAD', navBarNavigation: true},
    { path: 'services', Component: Services, name: 'SERVICIOS', navBarNavigation: true},
    { path: 'store', Component: Store, name: 'TIENDA', navBarNavigation: true}
]