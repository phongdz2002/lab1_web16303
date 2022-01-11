import { productList } from "../../data";

// eslint-disable-next-line import/prefer-default-export
export const EditPage = {
    print(id) {
        const content = productList.find((news) => news.id === id);
        return /* html */`
        <div class="m-4">
        <h2 class="text-danger font-bold text-4xl text-center">Chỉnh sửa bài viết</h2>
        <form>
        <div class="form-group">
            <label for="example-text-input" class="form-control-label">Tiêu đề</label>
            <input class="form-control" type="text" value="${content.name}" id="example-text-input">
        </div>
        <div class="form-group">
            <label for="example-search-input" class="form-control-label">Ảnh đại diện</label>
            <img src="${content.img}">
        </div>
        <div class="form-group">
        <input class="form-control" type="file" >
        </div>
        <div class="form-group">
        <div class="input-group">
          <span class="input-group-text">Mô tả bài viết</span>
          <textarea class="form-control" aria-label="With textarea">${content.desc}</textarea>
        </div>
    </div>
        <button class="btn btn-info text-light font-bold">Cập nhật</button>
        <button class="btn btn-warning  "><a href="/admin/news" class="text-light font-bold">Quay lại</a></button>
    </form>
        </div>
        `;
    },
};
