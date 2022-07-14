import {ACGameObject} from "@/assets/scripts/ACGameObject";
import {WallUtil} from "@/assets/scripts/WallUtil";

export class GameMapUtil extends ACGameObject {
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.inner_walls_count=20;
        this.rows = 13;
        this.cols = 13;

        this.walls=[];

    }
    create_walls(){
        const g =[];
        for (let r = 0; r < this.rows; r++) {
            g[r]=[];
            for (let c = 0; c < this.cols; c++) {
                g[r][c]=false;
            }
        }
        for (let r = 0; r < this.rows; r++) {
            g[r][0]=g[r][this.cols-1]=true;
        }
        for (let c = 0; c < this.cols; c++) {
            g[0][c]=g[this.rows-1][c]= true;
        }

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (g[r][c]){
                    this.walls.push(new WallUtil(r,c,this));

                }
            }
        }
    }

    start() {
        this.create_walls();
    }

    update_size() {
        this.L = Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows);
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    render() {
        const color_even = "#aad751";
        const color_odd = "#a2d149";
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if ((r + c) % 2 === 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }

    update() {
        this.update_size();
        this.render();
    }
}