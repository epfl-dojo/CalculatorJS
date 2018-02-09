function valeur_courante () {
  return parseInt($("#result").text())
}
function calcul_courant () {
  return $("#calcul").text()
}
function change_valeur_courante (nouvelle_valeur) {
  $("#result").text(nouvelle_valeur)
}
function change_calcul_courant (nouveau_text) {
  $("#calcul").text(nouveau_text)
}

$(function(){
  $("button").click(function(){
    calcul = calcul_courant()
    change_calcul_courant( calcul+$(this).data("value"))
    change_valeur_courante(eval(calcul_courant()))
  })
})
