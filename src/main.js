import Navigo from "navigo";
import { homeHtml } from "./pages/homePage";
import { Menus } from "./components/menu";
import { detailPage } from "./pages/detailPage";

document.getElementById("menu").innerHTML = Menus.print();
function renderHome() {
    document.getElementById("content").innerHTML = homeHtml.print();
}
const router = new Navigo("/", { linksSelector: "a" });
router.on(
    {
        // eslint-disable-next-line no-return-assign
        "/": () => renderHome(),
        // eslint-disable-next-line no-return-assign
        "/about": () => document.getElementById("content").innerHTML = "html",
        "/product/:id": ({ data }) => {
            const { id } = data;
            document.getElementById("content").innerHTML = detailPage.print(+id);
        },
    },
);
router.resolve();
