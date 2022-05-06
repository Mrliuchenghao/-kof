import{GameMap} from '/static/js/game_map/base.js';
import{kyo} from '/static/js/player/kyo.js';
class KOF{
    constructor(id)
    {
        this.$kof= $('#'+ id);
        //  console.log(this.$kof);
         this.game_map= new GameMap(this);
            this.players=[
                new kyo(this,{
                    id:0,
                    x:50,
                    y:0,
                    width:120,
                    height:200,
                    color:'blue',
                    
                }),
                new kyo(this,{
                    id:1,
                    x:1100,
                    y:0,
                    width:120,
                    height:200,
                    color:'red',
                    
                }),


            ];
    }
   
    
}

export{
        KOF
}