import { productList } from "../../data";

// eslint-disable-next-line import/prefer-default-export
export const ListNews = {
    print: () => /* html */`
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Tiêu đề
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ảnh đại diện
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mô tả
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col-2" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            ${productList.map((item) =>/* html */ `
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                ${item.name}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
             <img src=" ${item.img}">
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              ${item.desc}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
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
