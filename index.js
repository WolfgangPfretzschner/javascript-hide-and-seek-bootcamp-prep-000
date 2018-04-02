function getFirstSelector(selector){
  return document.querySelector(selector)
  
}
getFirstSelector('div')

function nestedTarget(){
  var nest = document.querySelector('#nested')
  var foo = nest.querySelector('.target')
  return foo
   
}
nestedTarget();

function increaseRankBy(n){
  var bar = document.getElementById('app').querySelectorAll('.ranked-list li');
  for (let i = 0; i < bar.length; i++) {
    bar[i].innerHTML = (parseInt(bar[i].innerHTML) + parseInt(n)).toString()
  }
}

function deepestChild(){
  var bar = ["#grand-node"]
  const foo = document.getElementById("grand-node").querySelectorAll("div")
  for (let i = 0; i < foo.length; i++) {
    bar.push("div")
  }
  bar = bar.join(" ")
  var res  = document.querySelector(bar)
  return res
}
