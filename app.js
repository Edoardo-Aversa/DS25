console.log("Hello Back to School!");
let viz;
//1. Create a variable to store the vizContainer
//2. Create a variable to store the dashboard options
//3. Create a variable to store the URL - if it doesn't
// load, might need to specify heigth and width
const options = {
  device: "desktop",
  height: "900px",
  width: "1100px",
};
const containerDiv = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/EmbeddingDashboard/EmbeddingDashboard";
function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}
document.addEventListener("DOMContentLoaded", initViz);
const exportpdfbutton = document.getElementById("exportpdf");
exportpdfbutton.addEventListener("click", exportpdffunction);
function exportpdffunction() {
  viz.showExportPDFDialog();
}
document.addEventListener("DOMContentLoaded", initViz);
const exportpptbutton = document.getElementById("exportppt");
exportpptbutton.addEventListener("click", exportpptfunction);
function exportpptfunction() {
  viz.showExportPowerPointDialog();
}
function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}
document
  .getElementById("FilterButton")
  .addEventListener("click", getRangeValues);
