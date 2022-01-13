// eslint-disable-next-line import/prefer-default-export
import { productList } from "../data";

// eslint-disable-next-line import/prefer-default-export
export const tinHocTap = {
    print: () =>/* html */ `
  <h2 class="text-3xl my-2 font-bold mx-2"><a href="" class="hover:text-blue-600 hover:ease-in-out duration-300">HOẠT
  ĐỘNG SINH VIÊN</a></h2>
  <div  class="grid grid-cols-3 ">
    ${productList.map((item) => {
        if (item.category === 1) {
            return ` 
          <div class="border-solid border-2 border-gray-600 text-center m-3  relative">
          <div class="overflow-hidden  "> <img src="${item.img}" alt="" class="w-full hover:scale-110 hover:translate-y-2 hover:ease-in-out duration-500"></div>
           <div class="p-5 ">
             <h3 class="my-2"><a href="/news/${item.id}" class="hover:underline font-bold text-red-600 text-2xl hover:ease-in-out duration-500 hover:text-blue-600">${item.name}</a></h3>
           <p class="text-left">${item.desc}</p>
         
           </div>
           <p class="absolute bottom-0 right-2" f><span class="text-red-500 font-bold text-lg">Category:</span> ${item.category == 1 ? "Esports" : "Giải trí"}</p>
         </div>`;
        }
    }).join("")}
  </div>
  `,
};
