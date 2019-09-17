const samInfo = {
  name: "Sam",
  age: 27,
  isHandsome: true,
  favMovies: ["LOTR", "Jurassic Park"],
  favFood: [
    {
      name: "Banana",
      fatty: false
    },
    {
      name: "Choco Pie",
      fatty: true
    }
  ]
};

document.write(samInfo.favFood[0].name);
