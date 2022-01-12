import { productList } from "../../data";

// eslint-disable-next-line import/prefer-default-export
export const EditPage = {
    print(id) {
        const content = productList.find((news) => news.id === id);
        return /* html */`
        <h2 class="text-red-500 font-bold text-4xl m-3">Cập nhật bài viết</h2>
          <div class="">
          <form action="" class="m-4">
          <div class="">
              <label for="" class="block font-bold text-lg my-2">Mã bài viết</label>
              <input type="text" value="${content.id}" class="border-2 border-slate-800	w-1/2 p-2 rounded-md focus:border-4 focus:border-blue-500 bg-gray-200" disabled >
          </div>
          <div class="my-4" >
            <label for="" class="block font-bold text-lg my-2">Tiêu đề bài viết</label>
            <input type="text" value="${content.name}" class="border-2 border-slate-800	w-1/2 p-2 rounded-md focus:border-4 focus:border-blue-500">
        </div>
        <div class="my-2">   
        <label for="" class="block font-bold text-lg my-2">Ảnh đại diện</label>
            <img src="${content.img}">
        </div>
        <div class="">
           
            <input type="file" class="border-2 border-slate-800	w-1/2 p-2 rounded-md focus:border-4 focus:border-blue-500" >
        </div>
        <div class="">
            <label for="" class="block font-bold text-lg my-2">Mô tả bài viết</label>
            <textarea name="" id="" cols="60" rows="10" class="border-2 border-slate-800	w-1/2 p-2 rounded-md focus:border-4 focus:border-blue-500">${content.desc}</textarea>
        </div>
        <div class="">
            <button class="bg-blue-500 text-white p-2 rounded-md hover:bg-red-500 font-bold">Cập nhật</button>
            <button class="bg-yellow-500 text-white p-2 rounded-md hover:bg-red-500 font-bold"><a href="/admin/news">Quay lại</a></button>
        </div>
       </form>
          </div>
        `;
    },
};
