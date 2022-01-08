/* eslint-disable import/prefer-default-export */
import { homeBanner } from "../components/banner";
import { Header } from "../components/header";
import { hoatDong } from "../components/hoatDong";
import { tinHocTap } from "../components/tinHocTap";

export const homeHtml = {
    print: () => `
    ${Header.print()}
    ${homeBanner.print()}
    <main>
    <div id="news">
    ${tinHocTap.print()}
    </div>
    <div id="post">
    ${hoatDong.print()}
    </div>
    </main>
    <footer class="bg-black text-center text-white py-5">
      <p class="animate-[doiMau_2s_ease-in-out_infinite] text-3xl">Phongnvph18006_WEB16303</p>
    </footer>
    `,
};
