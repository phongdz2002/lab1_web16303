import { productList } from "../data";

// eslint-disable-next-line import/prefer-default-export
export const NewsPage = {
    print: () => `
        ${productList.map((item) => `
        <div class="flex  border-2 my-2 relative">
                <img src="${item.img}" alt="">
                <div class="px-5  w-3/4">
                    <h3 class="my-4"><a href="/news/${item.id}" class="font-bold  text-xl hover:text-blue-500">${item.name}</a></h3>
                    <span class=" bg-red-500 py-1 px-2 text-white rounded-md absolute top-0 right-0 ">${item.category === 1 ? "Esporst" : "Giải trí"}</span>
                    <span class="text-lg block my-2">${item.desc}</span>
                </div>
            </div>
        `).join("")}
    `,
};
