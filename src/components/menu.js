import { listMenu } from "../menu";

// eslint-disable-next-line import/prefer-default-export
export const Menus = {
    print: () => `${listMenu.map((item) => ` <li class=""><a href="${item.address}" class=" text-white block py-3 px-2  hover:bg-orange-500 hover:text-black hover:ease-in-out duration-500" >${item.content}</a></li>`).join("")}`,
};
