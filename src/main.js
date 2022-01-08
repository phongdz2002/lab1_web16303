import Navigo from "navigo";
import { homeHtml } from "./pages/homePage";

const router = new Navigo("/", { linksSelector: "a" });
router.on(
    {
        // eslint-disable-next-line no-return-assign
        "/": () => document.getElementById("app").innerHTML = homeHtml.print(),
    },
);
router.resolve();
