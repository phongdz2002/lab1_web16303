// eslint-disable-next-line import/prefer-default-export
import { TinCungChuyenMuc } from "./tinCungChuyenMuc";
import { productList } from "../data";
// eslint-disable-next-line import/prefer-default-export
export const DetailProduct = {
    print(id) {
        const result = productList.find((product) => product.id === id);
        return ` <div class="w-3/4">
        <div class="flex border-l-4 border-red-500 bg-zinc-300 p-2 w-52 justify-around my-2">
          <p class="font-bold">FPT > </p>
          <p>${result.category === 1 ? "Esporst" : "Giải trí"}</p>
        </div>
        <h2 class="font-bold text-2xl p-2">
         ${result.name}</h2>
        <p class="p-2"><span class="font-bold text-red-500">Sầu Thiên Thu</span> - Theo Trí Thức Trẻ | 13/01/2022 02:24 PM
        </p>
        <div class="px-3 my-4">
          <p class="my-2">${result.desc}</p>
          <p>Hình ảnh tuyệt vời, cảm xúc dâng trào và tiết tấu đầy lôi cuốn chính là những cảm nhận chung của nhiều fan sau
            khi Attack on Titan: The Final Season Part 2 phát sóng tập đầu tiên. Đúng như dự đoán, phần tạo hình nhân vật,
            đặc biệt là Eren được trau chuốt và mang đến những cảm xúc khó tả cho khán giả hâm mộ.</p>
           <div class="my-3">
            <img src="${result.img}" class="w-1/2 m-auto">
            <span class="text-xs italic text-center block">Bài hát Ending của Attack on Titan: The Final Season Part 2 lấy đi nhiều nước mắt của khán giả</span>
           </div>
        </div>
      </div>
      <div>
      ${TinCungChuyenMuc.print(result.category, result.id)}
      </div>
      `;
    },
};
