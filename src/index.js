import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //テキストボックスの値を取得し、初期化
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";

  //liタグの子要素に各要素を設定
  document.getElementById("incomplete-list").appendChild(li);

  //divタグ生成
  const div = document.createElement("div");

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;
  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //const text = addTarget.firstElementChild.innerText;

  completeButton.addEventListener("click", () => {
    //リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    //完了リストに追加
    const addTarget = completeButton.parentNode.parentNode;
    //todoテキストを主力
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);

    //divタグ生成
    const div = document.createElement("div");
    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //完了リストに追加
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンのタグを削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //リストを追加
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
