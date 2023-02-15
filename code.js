function downloadOPML(content, fileName){
  const file = new File([content], fileName, { type: "text/xml" })
  const downloadLink = document.createElement("a")
  downloadLink.download = fileName
  downloadLink.href = window.URL.createObjectURL(file)
  downloadLink.click()
}
