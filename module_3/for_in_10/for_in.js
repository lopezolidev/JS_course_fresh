/*
for in ---> to iterate of ennumerable objects. Best example: object

for (property in object){
    do something with that property...
}
*/

const tools = {
    hammer: 2, // Key represents the tool name, value represents the quantity
    screwdriver: 5,
    saw: 1,
    wrench: {  // You can also nest objects for more complex data
      set: 1,
      individual: 3
    }
};

for (tool in tools) {
    console.log(tool)
}
/*
    hammer
    screwdriver
    saw
    wrench
*/

for (tool in tools) {
    // Print top-level property and value
    console.log(`${tool}: ${tools[tool]}`);
  
    // Check if the value is an object (nested object)
    if (typeof tools[tool] === 'object' && tools[tool] !== null) {
      
        // Handle nested object
      console.log("Nested Object:");
      for (const subTool in tools[tool]) {
        console.log(`  ${subTool}: ${tools[tool][subTool]}`);
      }
    }
  }

/*
    hammer: 2
    screwdriver: 5
    saw: 1
    wrench: [object Object]
    Nested Object:
        set: 1
        individual: 3
*/