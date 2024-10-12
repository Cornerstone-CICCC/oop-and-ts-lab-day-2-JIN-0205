"use strict";
// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }
function generateSummary(users) {
    const newUsers = users.filter((user) => user.active === true);
    const activeCount = newUsers.length;
    const averageAge = newUsers.reduce((acc, curr) => acc + curr.age, 0) / activeCount;
    console.log(`{ activeCount:${activeCount}, averageAge: ${averageAge} }`);
}
// Expected output:
generateSummary([
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
]);
// { activeCount: 2, averageAge: 32.5 }
