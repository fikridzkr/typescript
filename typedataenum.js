var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Unknown"] = 2] = "Unknown";
})(Gender || (Gender = {}));
var gen = Gender.Male;
console.log(gen);
