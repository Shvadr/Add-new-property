document.querySelector(".drop").addEventListener("click", function(e) {
    e = event.target.closest(".drop-item").innerHTML;
    document.querySelector(".type").innerHTML = e;
  });

  document.querySelector(".drop_1").addEventListener("click", function(e) {
    e = event.target.closest(".drop-item").innerHTML;
    document.querySelector(".type_1").innerHTML = e;
  });

  document.querySelector(".drop_2").addEventListener("click", function(e) {
    e = event.target.closest(".drop-item").innerHTML;
    document.querySelector(".type_2").innerHTML = e;
  });


let drop = document.querySelector(".drop")
let drop1 = document.querySelector(".drop_1")
let drop2 = document.querySelector(".drop_2")

document.querySelector('.parent').addEventListener("click", function() {
    drop.style.display === 'none' ? drop.style.display = 'initial' : drop.style.display = 'none';
})

document.querySelector('.parent_1').addEventListener("click", function() {
    drop1.style.display === 'none' ? drop1.style.display = 'initial' : drop1.style.display = 'none';
})

document.querySelector('.parent_2').addEventListener("click", function() {
    drop2.style.display === 'none' ? drop2.style.display = 'initial' : drop2.style.display = 'none';
})



let list = document.getElementsByTagName('li');
function markSelection(evt) {
	if(evt.target.style.fontWeight !== "bold") {
		evt.target.style.fontWeight = "bold";
        evt.target.style.backgroundColor = "#E8E6F9";
        evt.target.style.color = "#7065F0";
        evt.target.style.borderColor = "#7065F0";
	} else {
		evt.target.style.fontWeight = "normal";
        evt.target.style.backgroundColor = "#FFFFFF";
        evt.target.style.color = "#000";
        evt.target.style.borderColor = "#E0DEF7";
	}
}

for (i = 0, len = list.length; i < len; i++){
	list[i].onclick = markSelection;
}

document.querySelector('.form__add').addEventListener("click", function() {
    alert('Эта функция пока недоступна! Приносим свои извинения')
})

document.querySelector('.form__btn').addEventListener("click", function() {
    alert('Эта функция пока недоступна! Приносим свои извинения')
})