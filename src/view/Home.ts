import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(this.container = el(".home-view",
            el(".hello", "Hello Sim"),
            el("section",
                el("h6", "Gaia NFTs"),
                el(".nft-item",
                    el("img", { src: "/images/icon/nft-mock.png", alt: "nft" }),
                    el("p.id", "#1216"),
                    el("p.name", "Gaia Genesis"),
                ),
            ),
            el("section",
                el("h6.inventory-title", "My Inventory"),
                el(".inventory-item",
                    el("img", { src: "/images/icon/nft-mock.png", alt: "item" }),
                    el(".content",
                        el("p.name", "Genesis Stone"),
                        el("p.from", "from Gaia Genesis NFT"),
                        el(".amount-container",
                            el(".amount", "350"),
                            el("a", "Detail")
                        ),
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
