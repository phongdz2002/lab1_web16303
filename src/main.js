import Navigo from "navigo";
import { homeHtml } from "./pages/homePage";
import { Menus } from "./components/menu";
import { detailPage } from "./pages/detailPage";
import { FormDangNhap } from "./pages/dangNhap";
import { FormDangKy } from "./pages/dangKy";

document.getElementById("menu").innerHTML = Menus.print();
function renderHome(content) {
    document.getElementById("content").innerHTML = content;
}
const router = new Navigo("/", { linksSelector: "a" });
router.on(
    {
        // eslint-disable-next-line no-return-assign
        "/": () => renderHome(homeHtml.print()),
        // eslint-disable-next-line no-return-assign
        "/about": () => document.getElementById("content").innerHTML = renderHome("html"),
        "/product/:id": ({ data }) => {
            const { id } = data;
            renderHome(detailPage.print(+id));
        },
        "/login": () => {
            document.getElementById("app").innerHTML = FormDangNhap.print();
        },
        "/resign": () => {
            document.getElementById("app").innerHTML = FormDangKy.print();
        },
        "/admin/list": () => {
            document.getElementById("");
        },
    },
);
router.resolve();
