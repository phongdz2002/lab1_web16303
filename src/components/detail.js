import { productList } from "../data";

// eslint-disable-next-line import/prefer-default-export
export const DetailProduct = {
    print(id) {
        const result = productList.find((product) => product.id === id);
        return ` <div class="border-solid border-2 border-gray-600 text-center m-3 py-2">
        <div class="overflow-hidden h-60 w-96 m-auto"> <img src="${result.img}" alt="" class=" hover:scale-110 hover:translate-y-2 hover:ease-in-out duration-500"></div>
         <div class="p-5">
           <h3 class="my-2"><a href="" class="hover:underline font-bold text-red-600 text-2xl hover:ease-in-out duration-500 hover:text-blue-600">${result.name}</a></h3>
         <p class="text-left">${result.desc}</p>
         </div>
       </div>`;
    },
};
