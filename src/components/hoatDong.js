/* eslint-disable import/prefer-default-export */
import { productPost } from "../data";

export const hoatDong = {
    print: () => `
  <h2 class="text-3xl my-2 font-bold mx-2"><a href="" class="hover:text-blue-600 hover:ease-in-out duration-300">HOẠT
  ĐỘNG SINH VIÊN</a></h2>
  <div  class="grid grid-cols-3 ">
  ${productPost.map((item) => `
  <div class="border-solid border-2 border-gray-600 text-center m-3 py-2">
     <div class="overflow-hidden h-60 w-96 m-auto"> <img src="${item.img}" alt="" class=" hover:scale-110 hover:translate-y-2 hover:ease-in-out duration-500"></div>
      <div class="p-5">
        <h3 class="my-2"><a href="" class="hover:underline font-bold text-red-600 text-2xl hover:ease-in-out duration-500 hover:text-blue-600">${item.name}</a></h3>
      <p class="text-left">${item.desc}</p>
      </div>
    </div>`).join("")}
  `,
};