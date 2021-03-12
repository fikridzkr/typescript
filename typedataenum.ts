// enum default
enum Gender {
  Male,
  Female,
  Unknown,
}

// enum string
enum Category {
  Shirt = "SHIRT",
  pants = "PANTS",
  bag = "BAG",
}
let gen: Gender = Gender.Male;
let category: Category = Category.Shirt;
console.log(gen);
console.log(category);
