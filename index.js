var total_classes = prompt("enter total classes");
var attended_classes = prompt("enter attended classes");
var medical_cause = prompt("enter medical cause");
if (attended_classes / total_classes > 0.75) {
  console.log(true);
} else if (attended_classes / total_classes > 0.6 && medical_cause === "Y") {
  console.log(true);
} else {
  console.log(false);
}
