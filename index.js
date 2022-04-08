"use strict";

const tasks = [];
let updateH2 = function () {
	document.querySelector(".lists").innerHTML = "";
	for (let task of tasks) {
		document
			.querySelector(".lists")
			.insertAdjacentHTML("beforeend", `<li>${task}</li>`);
	}
};

document.querySelector(".add").addEventListener("click", function () {
	let newTask = prompt("What task do you want to add to your list?");
	tasks.push(`${newTask}`);
	updateH2();
});

document.querySelector(".delete").addEventListener("click", function () {
	let taskNumber = Number(prompt("Enter task number of the task you delete"));
	while (typeof taskNumber !== "number" || taskNumber > tasks.length + 1) {
		alert("Please input a valid number");
		taskNumber;
	}
	tasks.splice(taskNumber - 1, 1);
	alert("Task Deleted!");
	updateH2();
});

// let welcome = prompt(
// 	"Hello, what would you like to do?\nInput an option\n1: new\n2: delete\n3: quit"
// );

// while (welcome !== "quit") {
// 	if (welcome === "new") {
// 		let newTask = prompt("What task do you want to add to your list?");
// 		tasks.push(`Task ${tasks.length + 1}: ${newTask}`);
// 		alert("Task Added!");
// 		updateH2();
// 	} else if (welcome === "delete") {
// 		let taskNumber = Number(
// 			prompt(
// 				"Enter task number of the task you want to chicken out of you lazy fuck 🙄"
// 			)
// 		);
// 		while (typeof taskNumber !== number || tasks.length <= taskNumber) {
// 			alert("Please input a number");
// 			taskNumber;
// 		}
// 		tasks.splice(taskNumber - 1, 1);
// 		alert("Task Deleted!");
// 		updateH2();
// 	} else if (welcome === "quit") {
// 		console.log("OK, quitting now, Bye!!!👋");
// 	} else alert("Input not recognized");
// 	welcome = prompt("Input an option\n1: new\n2: delete\n3: quit");
// }
