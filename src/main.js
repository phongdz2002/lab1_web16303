import Navigo from "navigo";
import { homeHtml } from "./pages/homePage";
import { Menus } from "./components/menu";

function renderHome() {
    document.getElementById("content").innerHTML = homeHtml.print();
    document.getElementById("menu").innerHTML = Menus.print();
}
const router = new Navigo("/", { linksSelector: "a" });
router.on(
    {
        // eslint-disable-next-line no-return-assign
        "/": () => renderHome(),
        // eslint-disable-next-line no-return-assign
        "/about": () => document.getElementById("content").innerHTML = "html",
    },
);
router.resolve();
