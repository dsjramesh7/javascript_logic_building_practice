const inputWebName = document.getElementById("webName");
const inputWebUrl = document.getElementById("webUrl");
const saveBtn = document.getElementById("SaveBtn");
const bookMarkList = document.getElementById("bookMarkList");

function handleSaveBookmark() {
  const webName = inputWebName.value.trim();
  const webUrl = inputWebUrl.value.trim();
  if (!webName || !webUrl) {
    return alert("Both input box should be filled");
  }
  if (!webUrl.startsWith("http://") && !webUrl.startsWith("https://")) {
    return alert("Not a correct WebSite URL");
  }
  console.log(webName, webUrl);

  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = webUrl;
  link.textContent = webName;
  link.target = "_blank";
  listItem.appendChild(link);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => listItem.remove());
  listItem.appendChild(deleteBtn);

  bookMarkList.appendChild(listItem);

  inputWebName.value = "";
  inputWebUrl.value = "";
}

saveBtn.addEventListener("click", handleSaveBookmark);
