const mdFiles = document.querySelector("#files");
    const docTitle = document.querySelector("#doc-title");
    const btnGenerate = document.querySelector(".btn-generate");

    let files = [];

    // ShowDown Library
    const md = new showdown.Converter({tables: true});

    // Get file names via input
    const getFileNames = ()=>{
        for (i = 0; i < mdFiles.files.length; i++) {
            const filename = mdFiles.files[i].name;
            fetch("/md/"+filename).then(e=>e.text()).then(res=>{
                files.push({
                    name:filename.split(".")[0],
                    source:md.makeHtml(res)  // convert and store as HTML format
                })
            })
        }
    }

    // Generate Documentation goes here
    // most data just grab from config.js 
    const generateFiles = ()=>{
        if(!docTitle.value){
            alert("Please add document title")
            return;
        }
        // JSZip library
        let zip = new JSZip();

        // destructure from config.js
        const {footer,lightTheme,darkTheme,scriptText} = config;

        // keep sidebar outside the loop
       const sidebar = config.leftSidebar(docTitle.value,files);

       // loop each file and add into zip folder
       for(i = 0; i < files.length; i++){
            const {name,source} = files[i];

            // single HTML page
            const htmlpage = `
            ${config.header(`${docTitle.value} - ${name}`)}
            ${sidebar}
            ${config.mainContent(name,source)}
            ${config.pagination(name,files)}
            ${config.rightSidebar(source)}
            ${footer}
            `;

            zip.file(`${name}.html`, htmlpage);
       }
       // create JS folder
       const jsFolder = zip.folder("js");

       // create CSS folder
       const cssFolder = zip.folder("css");

       // Add javascript codes to main.js
       jsFolder.file('main.js', scriptText)

       // Add css codes to style.css
       cssFolder.file('style.css', styleText);

       // if user check light or dark theme
       const theme = document.querySelector('input[name="theme"]:checked').value;
       const styleText = theme == 'dark'?darkTheme:lightTheme;

       // Download zip folder with time stamp
       zip.generateAsync({type:"blob"})
            .then(function(content) {
                const foldername = Date.now();
                saveAs(content, `doc-${foldername}.zip`);
        });
        
    }

    // Listen on change when user select files
    mdFiles.addEventListener('change',getFileNames)

    //  Listen on when "generate" button click
    btnGenerate.addEventListener('click',generateFiles)