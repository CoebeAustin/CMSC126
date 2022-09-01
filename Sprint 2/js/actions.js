    var tablinks = document.getElementsByClassName("tab-links"); // gets tab-links class
    var tabcontents = document.getElementsByClassName("tab-contents"); // gets tab-contents class

    /* function for the about page
        Displays the Skills, Experience, and Education */
    function opentab(tabname){ 
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
