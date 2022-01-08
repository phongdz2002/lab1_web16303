/* eslint-disable import/prefer-default-export */
import { hoatDong } from "../components/hoatDong";
import { tinHocTap } from "../components/tinHocTap";

export const homeHtml = {
    print: () => `
    <main>
    <div id="news">
    ${tinHocTap.print()}
    </div>
    <div id="post">
    ${hoatDong.print()}
    </div>
    </main>
    
    `,
};
