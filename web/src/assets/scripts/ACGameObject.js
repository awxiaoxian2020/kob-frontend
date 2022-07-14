const AC_GAME_Objects=[];
export class ACGameObject{
    constructor() {
        AC_GAME_Objects.push(this);
        this.timedelta=0;
        this.has_called_start = false;
    }
    start(){}
    update(){

    }
    on_destroy(){}
    destroy(){
        this.on_destroy();
        for(let i in AC_GAME_Objects){
            const obj =AC_GAME_Objects[i];
            if (obj===this){
                AC_GAME_Objects.splice(i);
                break;
            }
        }
    }
}

let last_timestamp = 0;

const step = timestamp =>{
    for (let obj of AC_GAME_Objects) {
        if (!obj.has_called_start){
            obj.start();
            obj.has_called_start=true;
        } else {
            obj.timedelta=timestamp-last_timestamp;
            obj.update();
        }
    }
    last_timestamp=timestamp;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);