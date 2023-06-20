//--------------------------↓ここからhide-searchbox開閉--------------------------//

//--.btn-sをクリックするとhide-searchbox-aが開く
const searchBox = document.querySelector('.hide-searchbox-a');

document.addEventListener('DOMContentLoaded', function(){
	function menuClick(){
		searchBox.classList.add('visible');// クリックした際に実行する処理を記述
	}

	// 引数に指定したclassの値をもつ要素をすべて取得
	const searchBtn = document.getElementsByClassName('btn-s');
	// 上記で取得したすべての要素に対してクリックイベントを適用
	for(let i = 0; i < searchBtn.length; i++) {
    	searchBtn[i].addEventListener('click', menuClick, false);
	}   
}, false);



//--要素外の部分(wrapper)をクリックしたらhide-searchbox-aを閉じる
let searchClose = document.getElementById('wrapper');

searchClose.addEventListener('click', (event) => {
  if((event.target.closest('header') === null)
  &&(event.target.closest('.hide-searchbox-a') === null)){
    searchBox.classList.remove('visible');
  }
});

//--------------------------↑ここまでhide-searchbox開閉--------------------------//

//--------------------------↓ここからhide-box2-項目選択--------------------------//

function subMenu_NonVisible(elem){
    elem.style.opacity="0";
    elem.style.display="none";
    elem.style.pointerevents="none";
};

function subMenu_Visible(elem){
    elem.style.opacity="1";
    elem.style.display="";
    elem.style.pointerevents="initial";
};


//ボタン4種類
const btnLocation = document.getElementsByClassName('btn-location');
//const btnDate = document.getElementsByClassName('btn-date');
const btnGuestNumber = document.getElementsByClassName('btn-guestnumber');
const btnSearch = document.getElementsByClassName('btn-search');



// hide-box2ボタンの取得
//const btnLocation = document.querySelector(".location-box-b");
const btnCheckIn = document.getElementsByClassName('btn-checkin');
const btnCheckOut = document.getElementsByClassName('btn-checkout');
//const btnGuestNumber = document.querySelector(".guest-box-b");

const subMenuLocation = document.querySelector(".submenu-location-a");
const subMenuDate = document.querySelector(".submenu-date-a");

//デフォルトはチェックインボタン選択状態
//btnCheckIn.classList.add('hide-box2-selected');
//subMenu_NonVisible(subMenuLocation);
//subMenu_NonVisible(ゲスト数も);


//一旦すべてのボタン・サブメニューのclassを外す
const removeSelect = function () {
    btnLocation.classList.remove("hide-box2-btn-selected");
    subMenuLocation.classList.remove("submenu-selected");
    btnCheckIn.classList.remove("hide-box2-btn-selected");
    btnCheckOut.classList.remove("hide-box2-btn-selected");
    subMenuDate.classList.remove("submenu-selected");
    btnGuestNumber.classList.remove("hide-box2-btn-selected");
  };
  
const menuBtnSelect = function () {
    btnLocation.addEventListener("click", function () {
      let selected = btnLocation.classList.contains("hide-box2-btn-selected");
      removeSelect();
      //選択されていなかったらclassを追加
      if (!selected) {
        btnLocation.classList.add("hide-box2-btn-selected");
        subMenuLocation.classList.add("submenu-selected");
      }
    });
  
    //...(他のボタンも同様)
};


const btnHideBox2 = function(){
    btnLocation.addEventListener("click", function(){
        btnLocation.classList.toggle('hide-box2-btn-selected');
        subMenu_Visible(subMenuLocation);
        subMenu_NonVisible(subMenuDate);
        if(btnCheckIn.classList.contains('hide-box2-selected')){
            btnCheckIn.classList.remove('hide-box2-selected');
        }
        if(btnCheckOut.classList.contains('hide-box2-selected')){
            btnCheckOut.classList.remove('hide-box2-selected');
        }
        if(btnGuestNumber.classList.contains('hide-box2-selected')){
            btnGuestNumber.classList.remove('hide-box2-selected');
        }
    });  

    btnCheckIn.addEventListener("click", function(){
        btnCheckIn.classList.toggle('hide-box2-selected');
        if(btnLocation.classList.contains('hide-box2-selected')){
            btnLocation.classList.remove('hide-box2-selected');
        }
        if(btnCheckOut.classList.contains('hide-box2-selected')){
            btnCheckOut.classList.remove('hide-box2-selected');
        }
        if(btnGuestNumber.classList.contains('hide-box2-selected')){
            btnGuestNumber.classList.remove('hide-box2-selected');
        }

    });  

    btnCheckOut.addEventListener("click", function(){
        btnCheckOut.classList.toggle('hide-box2-selected');
        subMenu_NonVisible(subMenuLocation);
        subMenu_Visible(subMenuDate);
        if(btnLocation.classList.contains('hide-box2-selected')){
            btnLocation.classList.remove('hide-box2-selected');
        }
        if(btnCheckIn.classList.contains('hide-box2-selected')){
            btnCheckIn.classList.remove('hide-box2-selected');
        }
        if(btnGuestNumber.classList.contains('hide-box2-selected')){
            btnGuestNumber.classList.remove('hide-box2-selected');
        }

    });  

    btnGuestNumber.addEventListener("click", function(){
        btnGuestNumber.classList.toggle('hide-box2-selected');
        subMenu_NonVisible(subMenuLocation);
        subMenu_NonVisible(subMenuDate);
        if(btnLocation.classList.contains('hide-box2-selected')){
            btnLocation.classList.remove('hide-box2-selected');
        }
        if(btnCheckIn.classList.contains('hide-box2-selected')){
            btnCheckIn.classList.remove('hide-box2-selected');
        }
        if(btnCheckOut.classList.contains('hide-box2-selected')){
            btnCheckOut.classList.remove('hide-box2-selected');
        }
    });  

};

btnHideBox2();



//--------------------------↑ここまでhide-box2-項目選択--------------------------//


//--------------------------↓ここからカレンダー自動作成--------------------------//

const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const config = {
    show: 24,
}

function showCalendar(year, month) {
    for ( i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month)
        const sec = document.createElement('div')
		sec.className = 'calendar-a'
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}


function createCalendar(year, month) {
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    let dayCount = 1 // 日にちのカウント
    let calendarHtml = '' // HTMLを組み立てる変数

	calendarHtml += '<div class="calendar-b">'
    calendarHtml +='<div class="yearmonth-a">'+'<section>'+'<h2 class="yearmonth-b">'+year+'年'+month+'月'+'</h2>' +'</section>'+'</div>'
    calendarHtml += '<table class="dates">'

    // 曜日の行を作成

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td>' + '</td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた
                let num = dayCount - endDayCount
                calendarHtml += '<td>' + '</td>'
                dayCount++
            } else {
                calendarHtml += '<td>' +'<div class="daycount">' + dayCount +'</div>'+ '</td>'
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

	calendarHtml += '</div>'

    return calendarHtml
}

showCalendar(year, month)
//--------------------------↑ここまでカレンダー自動作成--------------------------//



//--------------------------↓ここからカレンダースライダー--------------------------//
const calenarSlider = function(){
    // Next(Prev)ボタンの取得
    const next = document.querySelector(".btn-next-b");
    const prev = document.querySelector(".btn-prev-b");

    // liタグのwidthを取得
    const sliderwidth = document.querySelector(".calendar-a");
    let width = sliderwidth.clientWidth;

    // slider(ul要素、li要素一覧)の取得
    const sliderlist = document.querySelector(".calendar-slider-b");
    const sliderlist_item = document.querySelectorAll(".calendar-a")

    // カウンターの設定
    let counter = 0;

    // イベントリスナー (next)
    next.addEventListener("click", function(){
        if(counter == sliderlist_item.length - 1) return; //ボタン連打対策
        prev.style.display = "block";
        sliderlist.style.transition = ".3s";
        counter ++;
        sliderlist.style.transform = "translateX("+ (- width * counter) + "px)";

        sliderlist.addEventListener("transitionend", function(){
            if(counter == sliderlist_item.length - 1){
                sliderlist.style.transition = "none";
                next.style.display = "none";
            }
        })
    });

    // イベントリスナー (prev)
    prev.addEventListener("click", function(){
        if(counter == sliderlist_item.length - sliderlist_item.length) return; //ボタン連打対策
        next.style.display = "block";
        sliderlist.style.transition = ".3s";
        counter --;
        sliderlist.style.transform = "translateX("+ (- width * counter) + "px)";

        sliderlist.addEventListener("transitionend", function(){
            if(counter == sliderlist_item.length - sliderlist_item.length){
                sliderlist.style.transition = "none";
                prev.style.display = "none";
            }
        })
    });
};

calenarSlider();

//--------------------------↑ここまでカレンダースライダー--------------------------//


//--------------------------↓ここから日付±日数選択--------------------------//

const calenarDateOption = function(){
    // ±日数ボタンの取得
    const btnDayPlus1 = document.querySelector(".dayplus-1");
    const plus1day = document.querySelector(".plus1day");
    const btnDayPlus2 = document.querySelector(".dayplus-2");
    const plus2day = document.querySelector(".plus2day");
    const btnDayPlus3 = document.querySelector(".dayplus-3");
    const plus3day = document.querySelector(".plus3day");
    const btnDayPlus7 = document.querySelector(".dayplus-7");
    const plus7day = document.querySelector(".plus7day");
    const checkInDisplay = document.querySelector(".checkin-bottom-a");

    //±日数ボタンクリックでボタンstyle変更・±日数表示
    btnDayPlus1.addEventListener("click", function(){
        btnDayPlus1.classList.toggle('btn-date-correct-b');
        plus1day.classList.toggle('display-visible'); 
        if(plus2day.classList.contains('display-visible')){
            plus2day.classList.remove('display-visible');
        }
        if(plus3day.classList.contains('display-visible')){
            plus3day.classList.remove('display-visible');
        }
        if(plus7day.classList.contains('display-visible')){
            plus7day.classList.remove('display-visible');
        }
        if(plus2day.classList.contains('display-visible')){
            plus2day.classList.remove('display-visible');
        }
        if(btnDayPlus2.classList.contains('btn-date-correct-b')){
            btnDayPlus2.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus3.classList.contains('btn-date-correct-b')){
            btnDayPlus3.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus7.classList.contains('btn-date-correct-b')){
            btnDayPlus7.classList.remove('btn-date-correct-b');
        }
    });  

    btnDayPlus2.addEventListener("click", function(){
        btnDayPlus2.classList.toggle('btn-date-correct-b');
        plus2day.classList.toggle('display-visible'); 
        if(plus1day.classList.contains('display-visible')){
            plus1day.classList.remove('display-visible');
        }
        if(plus3day.classList.contains('display-visible')){
            plus3day.classList.remove('display-visible');
        }
        if(plus7day.classList.contains('display-visible')){
            plus7day.classList.remove('display-visible');
        }
        if(btnDayPlus1.classList.contains('btn-date-correct-b')){
            btnDayPlus1.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus3.classList.contains('btn-date-correct-b')){
            btnDayPlus3.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus7.classList.contains('btn-date-correct-b')){
            btnDayPlus7.classList.remove('btn-date-correct-b');
        }
    });

    btnDayPlus3.addEventListener("click", function(){
        btnDayPlus3.classList.toggle('btn-date-correct-b');
        plus3day.classList.toggle('display-visible'); 
        if(plus1day.classList.contains('display-visible')){
            plus1day.classList.remove('display-visible');
        }
        if(plus2day.classList.contains('display-visible')){
            plus2day.classList.remove('display-visible');
        }
        if(plus7day.classList.contains('display-visible')){
            plus7day.classList.remove('display-visible');
        }
        if(plus2day.classList.contains('display-visible')){
            plus2day.classList.remove('display-visible');
        }
        if(btnDayPlus1.classList.contains('btn-date-correct-b')){
            btnDayPlus1.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus2.classList.contains('btn-date-correct-b')){
            btnDayPlus2.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus7.classList.contains('btn-date-correct-b')){
            btnDayPlus7.classList.remove('btn-date-correct-b');
        }
    });

    btnDayPlus7.addEventListener("click", function(){
        btnDayPlus7.classList.toggle('btn-date-correct-b');
        plus7day.classList.toggle('display-visible'); 
        if(plus1day.classList.contains('display-visible')){
            plus1day.classList.remove('display-visible');
        }
        if(plus2day.classList.contains('display-visible')){
            plus2day.classList.remove('display-visible');
        }
        if(plus3day.classList.contains('display-visible')){
            plus3day.classList.remove('display-visible');
        }
        if(plus2day.classList.contains('display-visible')){
            plus2day.classList.remove('display-visible');
        }
        if(btnDayPlus1.classList.contains('btn-date-correct-b')){
            btnDayPlus1.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus2.classList.contains('btn-date-correct-b')){
            btnDayPlus2.classList.remove('btn-date-correct-b');
        }
        if(btnDayPlus3.classList.contains('btn-date-correct-b')){
            btnDayPlus3.classList.remove('btn-date-correct-b');
        }
        
    });
};

calenarDateOption();

//--------------------------↑ここまで日付±日数選択--------------------------//


//--------------------------↓ここからdate-option選択--------------------------//
const dateOptionLeftOrRight = function(){
    // date-optionボタンの取得
    const btnDateOptionLeft = document.querySelector(".date-option-left");
    const btnDateOptionRight = document.querySelector(".date-option-right");

    //±日数ボタンクリックでボタンstyle変更
    btnDateOptionLeft.classList.add('date-option-selected');
    btnDateOptionLeft.addEventListener("click", function(){
        btnDateOptionLeft.classList.toggle('date-option-selected');
        if(btnDateOptionRight.classList.contains('date-option-selected')){
            btnDateOptionRight.classList.remove('date-option-selected');
        }
    });  

    btnDateOptionRight.addEventListener("click", function(){
        btnDateOptionRight.classList.toggle('date-option-selected');
        if(btnDateOptionLeft.classList.contains('date-option-selected')){
            btnDateOptionLeft.classList.remove('date-option-selected');
        }
    });  
};

dateOptionLeftOrRight();

//--------------------------↑ここまでdate-option選択--------------------------//



//--------------------------↓ここから日付選択--------------------------//


const theDayList = document.querySelectorAll('.daycount');

theDayList.forEach(function(theDayList){

    theDayList.addEventListener('click',function(){
        if((btnCheckIn.classList.contains('hide-box2-selected'))
        &&(theDayList.classList.contains('checkin-day-selected') === false)){
            theDayList.classList.add('checkin-day-selected');
            btnCheckIn.classList.remove('hide-box2-selected');
            btnCheckOut.classList.add('hide-box2-selected');
        } 
        if((btnCheckOut.classList.contains('hide-box2-selected'))
        &&(theDayList.classList.contains('checkout-day-selected') === false)){
            theDayList.classList.add('checkout-day-selected');
        }
    });
});






//--------------------------↑ここまで日付選択--------------------------//


console.log