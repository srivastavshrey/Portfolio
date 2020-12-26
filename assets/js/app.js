const navBtn = document.getElementById('dropdownMenuButton');
const navSidebar = document.getElementById('sidebar');
const mainArea = document.getElementById('main-area');

navBtn.addEventListener('click',()=>{
    navSidebar.style = 'width:150px!important;padding:10px 5px';
})

const closeSidebar = ()=>{
    navSidebar.style = 'width:0px;padding:10px 0px';
}

