import {ACGameObject} from "@/assets/scripts/ACGameObject";

export class WallUtil extends ACGameObject {
    constructor(r, c, game_map) {
        super();
        this.r = r;
        this.c = c;
        this.game_map = game_map;
        this.color = "#B37226";
    }

    render() {
        const L = this.game_map.L;
        const ctx = this.game_map.ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.c * L, this.r * L,L,L);

    }

    update() {
        this.render();
    }
}