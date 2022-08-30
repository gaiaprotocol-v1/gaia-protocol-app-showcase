import { BodyNode, BrowserInfo, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import BottomNav from "../component/BottomNav";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;

        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el("img", { src: "/images/icon/menu.svg", alt: "menu" }),
                    el("img.logo", { src: "/images/icon/gaia-logo.png", alt: "logo" }),
                    el("img", { src: "/images/icon/noti.svg", alt: "alert" }),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                    new BottomNav(),
                ),
            )
            ),
        );
    }

    public set title(title: string) {
        document.title = `${title} | Gaia Protocol`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
