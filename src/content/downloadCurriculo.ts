export function downloadCurriculo() {
  // Variável que irá pegar o arquivo do currículo em pdf
  const pdfUrl = new URL("../../document/curriculo.pdf", import.meta.url).href
  
  // Gera um link que servirá para gerar um download
  const link = document.createElement("a")
  link.href = pdfUrl

  // Nome do arquivo no qual será baixado
  link.download = 'Currículo-Euzebio-Batista-Front-end-Web.pdf'

  link.click()
}