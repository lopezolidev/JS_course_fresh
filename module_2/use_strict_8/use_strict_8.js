// Execute in the browser

function character (){
    console.log(` ${this}`)
}

character() // [object Window] ← refers to the window |  [object global] ← in Nodejs


'use strict'

v = 2   // VM434:3 Uncaught ReferenceError: v is not defined
        //at <anonymous>:3:3

// 'use strict' impedes javascript to be so permissive. That also restricts us from accessing 'window' object in our code when we use such reserved word