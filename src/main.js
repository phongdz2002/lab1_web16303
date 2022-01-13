import Navigo from "navigo";
import { homeHtml } from "./pages/homePage";
import { Menus } from "./components/menu";
import { detailPage } from "./pages/detailPage";
import { FormDangNhap } from "./pages/dangNhap";
import { FormDangKy } from "./pages/dangKy";
import { HomeAdmin } from "./pages/admin/dashboard";
import { AdminHomePage } from "./components/admin/home";
import { ListNews } from "./components/admin/list";
import { AddNewPage } from "./pages/admin/addPage";
import { EditNewsPage } from "./pages/admin/editPage";
import { SiteNewPage } from "./pages/news";

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
        "/news": () => {
            document.getElementById("content").innerHTML = SiteNewPage.print();
        },
        "/news/:id": ({ data }) => {
            const { id } = data;
            renderHome(detailPage.print(+id));
        },
        "/login": () => {
            document.getElementById("root").innerHTML = FormDangNhap.print();
        },
        "/resign": () => {
            document.getElementById("root").innerHTML = FormDangKy.print();
        },
        "/admin/dashboard": () => {
            document.getElementById("root").innerHTML = HomeAdmin.print(AdminHomePage.print());
        },
        "/admin/news": () => {
            document.getElementById("root").innerHTML = HomeAdmin.print(ListNews.print());
        },
        "/admin/news/:id/edit": ({ data }) => {
            const { id } = data;
            document.getElementById("root").innerHTML = HomeAdmin.print(EditNewsPage.print(+id));
        },
        "/admin/news/add": () => {
            document.getElementById("root").innerHTML = HomeAdmin.print(AddNewPage.print());
        },
    },
);
router.resolve();
