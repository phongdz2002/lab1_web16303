// eslint-disable-next-line import/prefer-default-export
export const AddPage = {
    print() {
        return /* html */`
        <div class="m-4">
        <h2 class="text-danger font-bold text-4xl text-center">Thêm mới bài viết</h2>
        <form>
        <div class="form-group">
            <label for="example-text-input" class="form-control-label">Tiêu đề</label>
            <input class="form-control" type="text" placeholder="Nhập tiêu đề" id="example-text-input">
        </div>
        <div class="form-group">
        <label for="example-text-input" class="form-control-label">Ảnh đại diện</label>
        <input class="form-control" type="file">
        </div>
        <div class="form-group">
        <div class="input-group">
          <span class="input-group-text">Mô tả bài viết</span>
          <textarea class="form-control" aria-label="With textarea">Mô tả bài viết</textarea>
        </div>
    </div>
        <button class="btn btn-info text-light font-bold">Thêm mới</button>
    </form>
        </div>
        `;
    },
};
