import { NewsPage } from "../components/news";

// eslint-disable-next-line import/prefer-default-export
export const SiteNewPage = {
    print: () =>/* html */ `
    <h2 class="font-bold text-red-500 text-4xl text-center my-2" >News</h2>
        <div class="news">
        ${NewsPage.print()}
        </div>
    `,
};
