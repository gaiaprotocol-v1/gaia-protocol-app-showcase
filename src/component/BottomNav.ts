import { DomNode, el } from "skydapp-browser";

export default class BottomNav extends DomNode {
    constructor() {
        super(".bottom-nav");
        this.append(
            el("nav",
                el("a",
                    el("img", { src: "/images/icon/genesis-logo.png", alt: "Gaia Genesis" }),
                ),
                el("a",
                    el("img", { src: "/images/icon/supernova-logo.png", alt: "Gaia Superova" }),
                ),
                el("a.menu",
                    el("img.menu", { src: "/images/icon/add.svg", alt: "menu" }),
                ),
                el("a",
                    el("img", { src: "/images/icon/stable-dao-logo.png", alt: "Gaia Stable DAO" }),
                ),
                el("a",
                    el("img.profile", { src: "/images/icon/profile-mock.png", alt: "Profile" }),
                ),
            ),
        )
    }

    public delete() {
        super.delete();
    }
}
11967