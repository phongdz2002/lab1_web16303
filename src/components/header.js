import { menus } from "../menu";

// eslint-disable-next-line import/prefer-default-export
export const Header = {
    print: () => `
    <header class="bg-black">
      <div class="">
        <a href=""> <img src="./img/logo.jpg" alt="" class="m-auto h-40"></a>
      </div>
      <nav class="bg-blue-500">
        <ul class="flex  justify-between">
          <div id="menu" class="flex  px-3">
            ${menus.map((item) => ` <li class=""><a href="" class=" text-white block py-3 px-2  hover:bg-white hover:text-black hover:ease-in-out duration-500" >${item}</a></li>`).join("")}
          </div>
          <div class="mx-3">
            <form action="" class="my-2">
              <input type="text" class="p-2 h-10 w-96
               lg:w-80"  placeholder="Bạn muốn tìm gì ?">
              <button class="bg-green-800 text-white p-2 hover:bg-orange-500 hover:ease-in-out duration-500 lg:30">Tìm
                kiếm</button>
            </form>
          </div>
        </ul>

      </nav>
    </header>
    `,
};
