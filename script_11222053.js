
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
  if((event.target.closest('header') === null)&&(event.target.closest('.hide-searchbox-a') === null)){
    searchBox.classList.remove('visible');
  }
});














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
		sec.className = 'clalendar-a'
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

	calendarHtml += '<div class="calender-b">'
    calendarHtml +='<div class="yearmonth-a">'+'<section>'+'<h2 class="yearmonth-b">'+year+'年'+month+'月'+'</h2>' +'</section>'+'</div>'
    calendarHtml += '<table class="dates">'

    // 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
            } else {
                calendarHtml += '<td>' + dayCount + '</td>'
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
