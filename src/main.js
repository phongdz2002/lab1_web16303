import { productList, productPost } from "./data";
import { menus } from "./menu";

function show_menu() {
  if (menus) {
    const menu = menus.map((item) => ` <li class=""><a href="" class=" text-white block py-3 px-2 hover:underline hover:bg-white hover:text-black hover:ease-in-out duration-500" >${item}</a></li>`);
    document.getElementById("menu").innerHTML = menu.join(" ");
  }
}
function show_product() {
  if (productList) {
    const product = productList.map((item) => `  <div class="border-solid border-2 border-gray-600 text-center m-3 py-2">
       <div class="overflow-hidden h-60 w-96 m-auto"> <img src="${item.img}" alt="" class=" 	 hover:scale-110 hover:translate-y-2 hover:ease-in-out duration-500"></div>
        <div class="p-5">
          <h3><a href="" class="hover:underline font-bold text-red-600 text-2xl hover:ease-in-out duration-500 hover:text-blue-600">${item.name}</a></h3>
        <p class="text-left">${item.desc}</p>
        </div>
      </div>`);
    document.getElementById("product").innerHTML = product.join(" ");
  }
}

function show_post() {
  if (productPost) {
    const product = productPost.map((item) => `  <div class="border-solid border-2 border-indigo-600 text-center m-3 py-2">
    <div class="overflow-hidden h-60 w-96 m-auto"> <img src="${item.img}" alt="" class=" 	 hover:scale-110 hover:translate-y-2 hover:ease-in-out duration-500"></div>
        <div class="p-5">
          <h3><a href="" class="hover:underline font-bold text-red-600 text-2xl hover:ease-in-out duration-500 hover:text-blue-600">${item.name}</a></h3>
        <p class="text-left">${item.desc}</p>
        </div>
      </div>`);
    document.getElementById("productPost").innerHTML = product.join(" ");
  }
}
function render() {
  show_menu();
  show_product();
  show_post();
}
render();

