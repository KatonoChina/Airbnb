
//----↓ここからbtn-where---仮
$(function() {
    const searchBtn = $('.btn-where, .btn-when, .btn-number')
    const searchBox = $('.hide-searchbox-a')
    searchBtn.on('click', function(){
        searchBox.toggleClass('toggle');
    });
    });
//----↑ここまでbtn-where

let modal = document.getElementById('wrapper');

modal.addEventListener('click', (evemt) => {
  if(event.target.closest('.header-center') === null) {
    alert('外側をクリックされました。');
  }
});







  // クリックで処理開始
document.getElementById('searchIcon').addEventListener('click', () => {
    // 親要素のトグルを操作
    const flWrapper = document.getElementById('hide-searchbox-a');
    flWrapper.classList.toggle('toggle');
  });
  
  // 要素外をクリックで非表示
  document.addEventListener('click', (e) => {
    if(!e.target.closest('div.header-center')) {
      console.log("外側をクリックしました。");
       const flWrapper = document.getElementById('hide-searchbox-a');
    flWrapper.classList.add('toggle');
    } else {
      console.log("内側をクリックしました。")
    }
  })



let target=$("searchIcon");
const searchBox = $('hide-searchbox-a');
    target.click((event)=>{
        searchBox.toggleClass("toggle");
    });
    $(document).on("click", (e) => {
        if ($(e.target).closest(target).length<1) { // 要素外の場合
            searchBox.removeClass("toggle");
        }
    });