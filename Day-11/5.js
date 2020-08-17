window.addEventListener("load", () => {
  console.log("This is for test");

  //we can read the body element when page loads
  let list1 = new XMLHttpRequest();
  console.log(list1);

  const url = "https://reqres.in/api/users?page=2";
  list1.open("GET", url);

  list1.onreadystatechange = () => {
    console.log(list1.readyState);

    if (list1.readyState === 4) {
      console.log(list1.responseText);

      let list2 = JSON.parse(list1.responseText);

      console.log(list2);
      console.log(list2.data);
      logic1(list2.data);
    }
  };

  console.log(list1.readyState);
  list1.send();
});

function logic1(list3) {
  let doc = document.querySelector("#parentbBlockContainer");
  console.log("load page", doc);
  for (let i = 0; i < list3.length; i++) {
    let nodeclone = doc.children[0].cloneNode(true);
    nodeclone.style.display = "flex";
    nodeclone.children[0].innerHTML = list3[i].first_name;
    doc.insertBefore(nodeclone, doc.firstChild);
  }
}
