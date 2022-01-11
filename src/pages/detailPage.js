import { DetailProduct } from "../components/detail";

// eslint-disable-next-line import/prefer-default-export
export const detailPage = {
    print: (id) => `
    <main>
    ${DetailProduct.print(id)}
    </main>
    `,
};
