import { productList } from "../data";

// eslint-disable-next-line import/prefer-default-export

// eslint-disable-next-line import/prefer-default-export
export const TinCungChuyenMuc = {
    // eslint-disable-next-line camelcase
    print: (id, id_diff) =>/* html */ `
    <h3 class="font-bold text-4xl my-2">Tin cùng chuyên mục</h3>
    <div  class="grid grid-cols-3 ">
        ${productList.map((item) => {
        // eslint-disable-next-line camelcase
        if (item.category === id && item.id !== id_diff) {
            return `
                <div class="border-solid border-2 border-gray-600 text-center m-3 relative">
          <div class="overflow-hidden"> <img src="${item.img}" alt="" class="w-full hover:scale-110 hover:translate-y-2 hover:ease-in-out duration-500"></div>
           <div class="p-5">
             <h3 class="my-2"><a href="/news/${item.id}" class="hover:underline font-bold text-red-600 text-2xl hover:ease-in-out duration-500 hover:text-blue-600">${item.name}</a></h3>
           </div>
         </div>
                `;
        }
    }).join("")}
    </div>
    `,
};
