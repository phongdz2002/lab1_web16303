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
          <th class="text-uppercase text-secondary  font-weight-bolder opacity-7 text-xl">Mã bài viết</th>
          <th class="text-uppercase text-secondary text-xl font-weight-bolder opacity-7 ps-2">Tiêu đề</th>
          <th class="text-center text-uppercase text-secondary text-xl font-weight-bolder opacity-7">Ảnh đại diện</th>
          <th class="text-center text-uppercase text-secondary text-xl font-weight-bolder opacity-7">Danh Mục</th>
          <th class="text-secondary opacity-7 text-xl" >Action</th>
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
      <td class="align-middle text-center text-sm" >
        ${item.category === 1 ? 'Tin sinh viên' : 'Hoạt động sinh viên'}
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
  <div class="w-1/4 m-auto py-4">
  <nav aria-label="Page navigation example ">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="javascript:;" aria-label="Previous">
        <i class="fa fa-angle-left"></i>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="/admin/news/">1</a></li>
    <li class="page-item"><a class="page-link" href="/admin/news/2">2</a></li>
    <li class="page-item">
      <a class="page-link" href="javascript:;" aria-label="Next">
        <i class="fa fa-angle-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
  </nav>
  </div>
</div>

    `,
};
