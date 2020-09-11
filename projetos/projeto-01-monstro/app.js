new Vue({
    el: '#app',
    data:{
        playerLife: 100,
        monsterLife: 100,
        playerStr: 15,
        monsterStr: 20,
        gameStarted: false,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 ||  this.monsterLife ==0;
        }
    },
    methods:{
        changeGameStatus(){
            this.gameStarted = !this.gameStarted;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },
        attack(special){
            this.hurt('player', 'monster', 5,10,special, 'player');
            if(this.monsterLife > 0){
                this.hurt('monster', 'player', 5,10,!special, 'monster');
            }
        },
        heal(min, max){
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(heal+this.playerLife, 100);
            this.registerLog(`Player heals  ${heal}  points.`, 'heal');
        },
        healAndHurt(){
            this.heal(5, 10);
            this.hurt('monster', 'player', 5, 10, false, 'monster');
        },
        hurt(attacker, defender, min, max, special, cls){
            const plus = special?10:0;
            const hurt = this.getRandom(30,40);
            
            const lifeAttr = defender+'Life';
            const strAttr = attacker+'Str';

            const attack = Math.round((hurt)*((this[strAttr]+plus)/100));


            this[lifeAttr] = Math.max(this[lifeAttr]-attack, 0);
            
            this.registerLog(`${attacker} hits ${defender} with ${attack} points.`, cls)
        },
        getRandom(min, max){
            const value = Math.random()*(max-min)+min
            return Math.round(value)
        },
        registerLog(text, cls){
            this.logs.unshift({'text': text, 'cls':cls});
        }

    },
    watch: {
        hasResult(value){
            if(value){
                this.gameStarted = false;
            }
        }
    }
})