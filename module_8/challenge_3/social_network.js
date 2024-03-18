// Challenge: Build a Social Network

const data_base = [
    {
        username: 'Andres',
        password: 123
    },
    {
        username: 'Caro',
        password: 456
    },
    {
        username: 'Victoria',
        password: 789
    },
]

const users_timeline = [
    {
        username: 'Victoria',
        timeline: 'I love Javascript'
    },
    {
        username: 'Caro',
        timeline: 'I like tea more than coffee'
    },
    {
        username: 'Andres',
        timeline: 'I do not want to work today'
    },
    {
        username: 'Joey',
        timeline: 'Lets watch some TV'
    },
]

function validate_user (username, password) {
    for(let i = 0 ; i < data_base.length ; i++)
    {
        if(username === data_base[i].username && password === data_base[i].password)
        {
            for(let j = 0 ; j < users_timeline.length ; j++)
            {
                if(username === users_timeline[j].username) {
                    console.log(`Welcome to your account ${username}, this is your timeline: ${users_timeline[j].timeline}`)
                    return
                } 
            }
        }
    }
    console.log(`Sorry. ${username} it's not a user`)   
}

validate_user('Victoria', 789)