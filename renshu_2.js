//スタートメニューの取得
const btnStartMenu = document.querySelector(".start-menu-box");

const menuBoxOpen = function(){
    btnStartMenu.addEventListener("click", function(){
        btnStartMenu.classList.add('start-menu-box-opend');
    });
};

menuBoxOpen();



//ボタン各種、サブメニューの各種の取得
const btn_1 = document.querySelector(".btn-1");
const btn_2_A = document.querySelector(".btn-2-a");
const btn_2_B = document.querySelector(".btn-2-b");
const btn_3 = document.querySelector(".btn-3");
const submenu_1 = document.querySelector(".btn-1-submenu");
const submenu_2 = document.querySelector(".btn-2-submenu");
const submenu_3 = document.querySelector(".btn-3-submenu");


//デフォルトはボタン１選択状態
btn_2_A.classList.add('btn-selected');
submenu_2.classList.add('submenu-selected');



const menuBtnSelect = function(){
    btn_1.addEventListener("click", function(){
        btn_1.classList.toggle('btn-selected');
        submenu_1.classList.add('submenu-selected');
        if(btn_2_A.classList.contains('btn-selected')){
            btn_2_A.classList.remove('btn-selected');
        }
        if(btn_2_B.classList.contains('btn-selected')){
            btn_2_B.classList.remove('btn-selected');
        }
        if(btn_3.classList.contains('btn-selected')){
            btn_3.classList.remove('btn-selected');
        }
        if(submenu_2.classList.contains('submenu-selected')){
            submenu_2.classList.remove('submenu-selected');
        }
        if(submenu_3.classList.contains('submenu-selected')){
            submenu_3.classList.remove('submenu-selected');
        }
    });  

    btn_2_A.addEventListener("click", function(){
        btn_2_A.classList.toggle('btn-selected');
        submenu_2.classList.add('submenu-selected');
        if(btn_1.classList.contains('btn-selected')){
            btn_1.classList.remove('btn-selected');
        }
        if(btn_2_B.classList.contains('btn-selected')){
            btn_2_B.classList.remove('btn-selected');
        }
        if(btn_3.classList.contains('btn-selected')){
            btn_3.classList.remove('btn-selected');
        }
        if(submenu_1.classList.contains('submenu-selected')){
            submenu_1.classList.remove('submenu-selected');
        }
        if(submenu_3.classList.contains('submenu-selected')){
            submenu_3.classList.remove('submenu-selected');
        }
    });   

    btn_2_B.addEventListener("click", function(){
        btn_2_B.classList.toggle('btn-selected');
        submenu_2.classList.add('submenu-selected');
        if(btn_1.classList.contains('btn-selected')){
            btn_1.classList.remove('btn-selected');
        }
        if(btn_2_A.classList.contains('btn-selected')){
            btn_2_A.classList.remove('btn-selected');
        }
        if(btn_3.classList.contains('btn-selected')){
            btn_3.classList.remove('btn-selected');
        }
        if(submenu_1.classList.contains('submenu-selected')){
            submenu_1.classList.remove('submenu-selected');
        }
        if(submenu_3.classList.contains('submenu-selected')){
            submenu_3.classList.remove('submenu-selected');
        }
    });   

    btn_3.addEventListener("click", function(){
        btn_3.classList.toggle('btn-selected');
        submenu_3.classList.add('submenu-selected');
        if(btn_1.classList.contains('btn-selected')){
            btn_1.classList.remove('btn-selected');
        }
        if(btn_2_A.classList.contains('btn-selected')){
            btn_2_A.classList.remove('btn-selected');
        }
        if(btn_2_B.classList.contains('btn-selected')){
            btn_2_B.classList.remove('btn-selected');
        }
        if(submenu_1.classList.contains('submenu-selected')){
            submenu_1.classList.remove('submenu-selected');
        }
        if(submenu_2.classList.contains('submenu-selected')){
            submenu_2.classList.remove('submenu-selected');
        }
    });   

};

menuBtnSelect();
