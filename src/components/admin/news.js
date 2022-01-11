import { productList } from "../../data";

// eslint-disable-next-line import/prefer-default-export
export const listNews = {
    print: () => /* html */ `
    <button class="btn btn-warning m-4"><a href="/admin/news/add">Thêm bài viết</a></button>
    <div class="card">
  <div class="table-responsive">
    <table class="table align-items-center mb-0 text-center ">
      <thead>
        <tr>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Mã bài viết</th>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Tiêu đề</th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ảnh đại diện</th>
          <th class="text-secondary opacity-7 " >Action</th>
          <th class="text-secondary opacity-7 " ></th>
        </tr>
      </thead>
      <tbody>
      ${productList.map((item) => /* html */`
      <tr>
      <td class="text-center">   
            <h6 class="mb-0 text-xs ">${item.id}</h6>
      </td>
      <td class="p-5">
     ${item.name}
      </td>
      <td class="align-middle text-center text-sm" >
        <img src="${item.img}">
      </td>
      <td class="align-middle">
        <a href="/admin/news/${item.id}/edit" class="text-light font-weight-bold text-xs btn btn-info " data-toggle="tooltip" data-original-title="Edit user">
          Edit
        </a>
        <a href="#!" class="text-light font-weight-bold text-xs btn btn-danger" data-toggle="tooltip" data-original-title="Edit user">
          Delete
        </a>
      </td>
    </tr>
      
      `).join("")}
    
      </tbody>
    </table>
  </div>
</div>
    
    `,
};
