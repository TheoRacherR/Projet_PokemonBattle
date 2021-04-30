const chalk = require('chalk');

export class Pokemon {
    name: string;
    hp: number
    level: number;
    base_power: number;
    offensive_stat: number;
    defensive_stat: number;

    constructor(name: string, hp: number, level: number, base_power: number, offensive_stat: number, defensive_stat: number){
        this.name = name;
        this.hp = hp;
        this.level = level;
        this.base_power = base_power;
        this.offensive_stat = offensive_stat;
        this.defensive_stat = defensive_stat;
    }

    public attack(adversary: Pokemon): number {
        let damage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.offensive_stat * this.base_power / this.defensive_stat) / 50) + 2;
        return adversary.hp - damage;
    }

    public fight(adversary: Pokemon): Pokemon {
        let i = 0;
        while(this.hp > 0 && adversary.hp > 0) {
            if(i % 2 == 0){
                adversary.hp = this.attack(adversary);
                //console.log(chalk.red(adversary.name + " pokemon has " + adversary.hp + " hp left"));
            }else{
                this.hp = adversary.attack(this);
                //console.log(chalk.blue(this.name + " pokemon has " + this.hp + " hp left"));
            }

            i++;
        }

        if(this.hp <= 0)
            return adversary;
        else
            return this;

    }

}