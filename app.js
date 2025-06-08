function saveMemo() {
    const memoText = document.getElementById("memo").value;
    localStorage.setItem("memo", memoText);
    alert("メモを保存しました！");
}

// 画面を開いた時にメモを表示
window.onload = () => {
    document.getElementById("memo").value = localStorage.getItem("memo") || "";
};
