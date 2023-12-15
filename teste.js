function letra(palavra) {
  let i;
  let data = [];
  console.log(palavra);
  for (i = 0; i < palavra.length; i++) {
    if (palavra[i] == "@" || palavra[i] == "." || palavra[i] == "#") {
      palavra[i] = "";
    } else {
      data.push(palavra[i]);
    }
  }
  console.log(data.join(""));
}

letra("p@e#ra");
