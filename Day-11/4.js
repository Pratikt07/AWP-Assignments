window.addEventListener("load", () => {
  console.log("This is for test");
  //we can read the body element when page loads
  const abc = document.getElementById("parentbBlockContainer");
  console.log(abc);

  //const xyz = document.querySelector("#parentbBlockContainer");
  //console.log(xyz);

  for (let i = 0; i < 20; i++) {
    let nodeclone = abc.children[0].cloneNode(true);
    nodeclone.style.display = "flex";
    nodeclone.children[0].innerHTML = "Laukik" + i;
    abc.insertBefore(nodeclone, abc.firstChild);
  }
});
