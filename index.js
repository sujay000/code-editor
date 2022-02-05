const htmlEditor = CodeMirror(
  document.querySelector(".editor .code .html-code"),
  {
    lineNumbers: true,
    tabsize: 4,
    mode: "xml",
    autoCloseTags: true,
  }
);
const cssEditor = CodeMirror(
  document.querySelector(".editor .code .css-code"),
  {
    lineNumbers: true,
    tabsize: 4,
    mode: "css",
  }
);
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"), {
  lineNumbers: true,
  tabsize: 4,
  mode: "javascript",
});

document.querySelector("#run-btn").addEventListener("click", () => {
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
  let previewWindow =
    document.querySelector("#preview-window").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlCode + cssCode + jsCode);
  previewWindow.close();
});
