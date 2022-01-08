import { menus } from "../menu";

// eslint-disable-next-line import/prefer-default-export
export const Menus = {
    print: () => `${menus.map((item) => ` <li class=""><a href="/about" class=" text-white block py-3 px-2  hover:bg-white hover:text-black hover:ease-in-out duration-500" >${item}</a></li>`).join("")}`,
};
