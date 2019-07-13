const config = {
    darkTheme:`body{
    color:#c3c3c3;
    background:#2c3a56;
}
hr{
    border-top:1px solid #67696f;
}
.container{
        max-width:100%;
        width:100%;
    }
    td,th{
        border: 1px solid #ddd;
        padding: 10px;
    }    
    a{
        color:#c3c3c3;
    }
    a:hover{
        color:#44ecfc;
        text-decoration:none;
    }
    .fa {
        font-size: 20px;
    }
    .fa:hover{
        cursor:pointer;
    }
    .main-content p img{
        width:100%;
    }
    .logo-wrap span.logo,.logo-center-wrap span.logo{
        font-weight: bold;
        font-size: 22px;
        border-radius:2px;
        color: #fff;
        padding: 10px 16px;
        background: #7af1fc;
    }
    .logo-center-wrap{
        width:100%;
        height:80px;
        text-align:center;
        line-height:80px;
        display:none;
    }
   .page-title,.navbar-brand,.up-case{
     text-transform: uppercase;
   }
   .right-sidebar ul li a.active {
        color: #44ecfc;
    }
    .right-sidebar ul li a.active:before {
        background: #44ecfc;
        height: 100%;
        width: 2px;
        left: -26px;
        top: 0;
        position: absolute;
        content: '';
    }
    .logo-wrap {
        border-bottom: 1px solid #67696f;
        width:100%;
        height: 80px;
        line-height: 80px;
        text-align:center;
    }
    .back-btn{
        display:none;
    }
    ul li.list-group-item{
        background-color:transparent;
        padding:6px;
        border:1px solid transparent;
    }
    ul li.list-group-item a{
        text-decoration:none;
        text-transform: capitalize;
    }
    ul.right-menu li a{
        font-size:12px;
    }
    ul.right-menu li a:hover{
        color:#44ecfc;
    }


    ul.left-menu li.list-group-item:hover{
        background:#1e2940;
    }
    ul.left-menu li.list-group-item.active{
        background:#475571;
        border-left:1px solid #67696f;
        border-bottom:1px solid #67696f;
        border-right:1px solid #fff;
    }
    ul.left-menu li.list-group-item.active a{
        color:#f0f7f9;
    }

    ul.left-menu li.list-group-item{
        padding-left:20px;
        border-top:1px solid #67696f;
    }
    ul.left-menu li.list-group-item:first-child{
        border-top:1px solid transparent;
    }
    
    .back-btn {
        box-shadow: 0 1px 5px #96a5c3;
        background: #475571;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        height: 50px;
        width: 100%;
        line-height: 50px;
    }
    
    .left-sidebar{
        transition:all ease 0.4s;
        z-index: 1;
        position:fixed;
        background: #2c3a56;
        top:0;
        left:0;
        border-right:1px solid #ddd;
        width:290px;
        height:100%;
    }
    .right-sidebar{
        position:fixed;
        top:0;
        right:0;
        width:210px;
        border-left:1px solid #ddd;
    }
    .page-box-left,.page-box-right{
        box-shadow: 0 1px 5px #96a5c3;
        background:#475571;
        width: 100%;
        padding:10px;
        border-radius:4px;
    }
    .page-box-right {
        text-align:right;
    }
    .page-box-right:hover,.page-box-left:hover{
        border:1px solid #7af1fc;
    }
    @media (max-width:992px){
        .logo-wrap{
            display:none;
        }
        .back-btn{
            display:block;
        }
        .left-sidebar{
            transform:translateX(-100%);
        }
        .right-sidebar{
            display:none;
        }
        .right-sidebar{
            border-left:0;
        }
       .logo-center-wrap{
            display:block;
            box-shadow:0 1px 5px #ddd;
        }
        .logo-center-wrap div.row{
            width:100%;
            padding:0;
            margin:0;
        }
    }
    @media (max-width:578px){
        .logo{
            transform:scale(0.8);
        }
    }
    `,
    lightTheme:`.container{
        max-width:100%;
        width:100%;
    }
    td,th{
        border: 1px solid #ddd;
        padding: 10px;
    }    
    a{
        color:#222;
    }
    a:hover{
        text-decoration:none;
    }
    .fa {
        font-size: 20px;
    }
    .fa:hover{
        cursor:pointer;
    }
    .main-content p img{
        width:100%;
    }
    .logo-wrap span.logo,.logo-center-wrap span.logo{
        font-weight: bold;
        font-size: 22px;
        border-radius:2px;
        color: #fff;
        padding: 10px 16px;
        background: #7af1fc;
    }
    .logo-center-wrap{
        width:100%;
        height:80px;
        text-align:center;
        line-height:80px;
        display:none;
    }
   .page-title,.navbar-brand,.up-case{
     text-transform: uppercase;
   }
   .right-sidebar ul li a.active {
        color: #44ecfc;
    }
    .right-sidebar ul li a.active:before {
        background: #44ecfc;
        height: 100%;
        width: 2px;
        left: -26px;
        top: 0;
        position: absolute;
        content: '';
    }
    .logo-wrap {
        border-bottom: 1px solid #ddd;
        width:100%;
        height: 80px;
        line-height: 80px;
        text-align:center;
    }
    .back-btn{
        display:none;
    }
    ul li.list-group-item{
        background-color:transparent;
        padding:6px;
        border:1px solid transparent;
    }
    ul li.list-group-item a{
        text-decoration:none;
        text-transform: capitalize;
    }
    ul.right-menu li a{
        font-size:12px;
    }
    ul.right-menu li a:hover{
        color:#44ecfc;
    }


    ul.left-menu li.list-group-item:hover{
        background:#e9f0f7;
    }
    ul.left-menu li.list-group-item.active{
        background:#fff;
        border-left:1px solid #ddd;
        border-bottom:1px solid #ddd;
        border-right:1px solid #fff;
    }
    ul.left-menu li.list-group-item.active a{
        color:#44ecfc;
    }

    ul.left-menu li.list-group-item{
        padding-left:20px;
        border-top:1px solid #ddd;
    }
    ul.left-menu li.list-group-item:first-child{
        border-top:1px solid transparent;
    }
    .back-btn {
        box-shadow: 0 1px 5px #ddd;
        background: #fff;
        height: 50px;
        width: 100%;
        line-height: 50px;
    }
    
    .left-sidebar{
        transition:all ease 0.4s;
        z-index: 1;
        position:fixed;
        background:#F5F7F9;
        top:0;
        left:0;
        border-right:1px solid #ddd;
        width:290px;
        height:100%;
        overflow-y: scroll;
    }
    .right-sidebar{
        position:fixed;
        top:0;
        right:0;
        width:210px;
        border-left:1px solid #ddd;
    }
    .page-box-left,.page-box-right{
        box-shadow: 0 1px 5px #ddd;
        width: 100%;
        padding:10px;
        border-radius:4px;
    }
    .page-box-right {
        text-align:right;
    }
    .page-box-right:hover,.page-box-left:hover{
        border:1px solid #7af1fc;
    }
    @media (max-width:992px){
        .logo-wrap{
            display:none;
        }
        .back-btn{
            display:block;
        }
        .left-sidebar{
            transform:translateX(-100%);
        }
        .right-sidebar{
            display:none;
        }
        .right-sidebar{
            border-left:0;
        }
       .logo-center-wrap{
            display:block;
            box-shadow:0 1px 5px #ddd;
        }
        .logo-center-wrap div.row{
            width:100%;
            padding:0;
            margin:0;
        }
    }
    @media (max-width:578px){
        .logo{
            transform:scale(0.8);
        }
    }
    `,
    header:(title)=>{
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
            <link rel="stylesheet" href="css/style.css">
            </head>
           <body>
           <div class="logo-center-wrap">
                    <div class="row">
                        <div class="col-2"><div class="toggle-btn"><span class="fa fa-bars"></span></div></div>
                        <div class="col-8"><span class="logo mr-3">${title.charAt(0)}</span><a href="#" class="navbar-brand">${title.split("-")[0]}</a></div>
                        <div class="col-2"></div>
                    </div>
           </div>
           <div class="container">
           <div class="row">
           <div class="col-lg-3">`;
    },
    leftSidebar: (title,data)=>{
        let lists = '';
        for(let i = 0; i < data.length; i++){
            const {name} = data[i];
            lists += `<li class="list-group-item"><a href="${name}.html">${name}</a></li>`
        }

        return `<div class="left-sidebar">
        <div class="back-btn"><span class="ml-4 fa fa-arrow-left"></span></div>
        <div class="logo-wrap"><span class="logo mr-3">${title.charAt(0)}</span><a href="#" class="navbar-brand">${title}</a></div>
        <ul class="left-menu list-group pl-4 pt-4">
                ${lists}
        </ul>
        </div>
        </div>
        <div class="col-lg-7">`
    },
    mainContent:(name,source)=>{
        return `<div class="main-content p-4 mb-2">
        <h1 class="page-title my-5">${name}</h1>
    <hr>
    ${source}
    </div>`;
    },
    pagination:(name,files)=>{
        let pager = '<div class="row mb-5">';
        files.forEach((e,i)=>{
            if(name == e.name){
                if(files[i-1] !== undefined && files[i+1] !== undefined){
                    pager += `<div class="col-6">
                    <a href="${files[i-1].name}.html">
                        <div class="page-box-left">
                            <span class="fa fa-arrow-left"></span> ${files[i-1].name}
                        </div>
                    </a>
                    </div>
                    <div class="col-6">
                    <a href="${files[i+1].name}.html">
                       <div class="page-box-right">
                            ${files[i+1].name} <span class="fa fa-arrow-right"></span>
                        </div>
                    </a>
                    </div>`;
                    return;
                }
                if(files[i-1] !== undefined && files[i+1] == undefined){
                    pager += `<div class="col-12">
                    <a href="${files[i-1].name}.html">
                        <div class="page-box-left">
                            <span class="fa fa-arrow-left"></span> ${files[i-1].name}
                        </div>
                    </a>
                    </div>`;
                    return;
                }
                if(files[i+1] !== undefined && files[i-1] == undefined){
                    pager += `<div class="col-12">
                    <a href="${files[i+1].name}.html">
                        <div class="page-box-right">
                            ${files[i+1].name} <span class="fa fa-arrow-right"></span>
                        </div>
                    </a>
                    </div>`;
                }
            }
        })
        pager += '</div>'
        return pager;
    },
    rightSidebar:(source)=>{
        let Dom = document.createElement("ul");
        Dom.innerHTML = source;
        const allH1 = Dom.querySelectorAll("h1");
        let rightLists = '';

        if(allH1.length > 0){
            allH1.forEach((e,i)=>{
                rightLists += `<li class="list-group-item"><a href="#${e.id}">${i+1} - ${e.innerText}</a></li>`;
            });
        }
      
       return `</div><!-- col-lg-7 -->
        <div class="col-lg-2">
           <div class="right-sidebar p-4 mt-4">
                <p class="up-case">Contents</p>
                <ul class="right-menu list-group">
                    ${rightLists}
                </ul>
           </div>
        </div> <!-- col-lg-2 -->
        </div></div>`
    },
    scriptText:`const rightSidebar  = document.querySelector(".right-sidebar");
    const leftSidebar  = document.querySelector(".left-sidebar");
    const rightMenu  = document.querySelectorAll(".right-sidebar ul li a");
    const leftMenu  = document.querySelectorAll(".left-sidebar ul li a");
    
    // active class to left sidebar
    leftMenu.forEach(menu=>{
        if(menu.href == window.location.href){
                menu.parentNode.classList.add("active");
        }else{
                menu.parentNode.classList.remove("active");
        }
    })
    
    // active class to right sidebar
    rightSidebar.addEventListener("click",e=>{
            rightMenu.forEach(menu=>{
                menu.classList.remove("active");
            })
            if(e.target.tagName == 'A' && e.target.hasAttribute("href")){
                e.target.classList.add("active");
            }
    })
    
    // smooth scroll to
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

// hide sidebar
const backBtn = document.querySelector(".back-btn");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click",e=>{
    leftSidebar.setAttribute("style","transform:translateX(0)");
})

backBtn.addEventListener("click",e=>{
    leftSidebar.removeAttribute("style");
})`,
    footer:`
    <script src="js/main.js"></script>
    </body></html>`
}