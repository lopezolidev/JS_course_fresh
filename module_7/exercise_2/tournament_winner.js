// Exercise: algorithmic tournament winner

const competitions = [
    ["JavaScript", "C#"],
    [`C#`, "Python"],
    ["Python", "JavaScript"]
]

const results = [ 0, 0, 1]

function determine_winner (competitions, results){
    let obj_total= {};
    for (let i = 0; i < competitions.length; i++) {
        if(!obj_total[competitions[i][0]]){
            obj_total[competitions[i][0]] = 0
        }
        if(!obj_total[competitions[i][1]]){
            obj_total[competitions[i][1]] = 0;
        }

        if(results[i] === 0){
            obj_total[competitions[i][1]] += 3
        } else {
            obj_total[competitions[i][0]] += 3
        }
    }

    let winner = 0 ;
    for(objs in obj_total){
        if(obj_total[objs] > 0){
            winner = obj_total[objs]
        }
    }

    for ( el in obj_total){
        if(obj_total[el] === winner){
            return el
        }
    }
}

console.log(`The winner of the tournament is:  ${determine_winner(competitions, results)}` )