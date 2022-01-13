import { productList } from "../../data";

// eslint-disable-next-line import/prefer-default-export
export const ListNews = {
    print: () => /* html */`
    <!-- This example requires Tailwind CSS v2.0+ -->
    <button class="bg-black text-white p-4 m-4 rounded-md hover:bg-blue-500"><a href="/admin/news/add">Thêm mới bài viết</a></button>
<div class="flex flex-col m-4">

<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="w-full divide-y divide-gray-200 text-center ">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="max-w-sm	 text-lg font-medium text-gray-500 uppercase tracking-wider">
              Mã bài viết
            </th>
            <th scope="col" class="max-w-sm	 text-lg font-medium text-gray-500 uppercase tracking-wider">
              Tiêu đề
            </th>
            <th scope="col" class=" max-w-sm text-lg	 font-medium text-gray-500 uppercase tracking-wider">
              Ảnh đại diện
            </th>
            <th scope="col" class=" max-w-sm	text-lg font-medium text-gray-500 uppercase tracking-wider">
              Danh mục
            </th>
            <th scope="col" class="relative max-w-sm	">
              
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
         ${productList.map((item) =>/* html */`
         <tr>
         <td class=" whitespace-nowrap h-4">
           <div class="text-center">
           ${item.id}
           </div>
         </td>
         <td class=" whitespace-nowrap">
           <div class="text-sm text-gray-900">${item.name}</div>
         </td>
         <td class=" whitespace-nowrap">
         
             <img src="${item.img}">
      
         </td>
         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
         ${item.category === 1 ? "Esporst" : "Giải trí"}
       </td>
         <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
           <a href="/admin/news/${item.id}/edit" class="hover:bg-indigo-900 bg-blue-500 text-white p-2 rounded-md">Edit</a>
         </td>
         <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
           <a href="#" class=" hover:bg-indigo-900 bg-red-500 text-white p-2 rounded-md">Delete</a>
         </td>
       </tr>
         
         `).join("")}

          <!-- More people... -->
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

    
    `,
};
