window.onload = function() {
  document.getElementsByTagName('button')[0].addEventListener('click',getObjects);

  var block = document.getElementsByTagName('div')[0];
  var win_img = document.createElement('img');
  block.appendChild(win_img);

  function getObjects() {
    var arr = Object.values(weapons_data);
    var count = getChoose(arr);
    var win_element = Object.keys(weapons_data)[count];

    for (value in weapons_img){
      if(value==win_element){
        win_img.setAttribute("src", weapons_img[value]);
        win_img.setAttribute("width", "380");
        win_img.setAttribute("height", "320");
        win_img.setAttribute("alt", win_element );
        console.log(win_element);
       }
     }
  }

  function getChoose(arr) {
    var total = 0;

    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    var randomPoint = Math.random() * total;

    for (i = 0; i < arr.length; i++) {
        if (randomPoint < arr[i])
            return i;
        else
            randomPoint -= arr[i];
    }
    return arr.max();
  }

}
