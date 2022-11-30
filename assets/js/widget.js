let buttons = document.getElementsByTagName('button');

/**
 * Function to adjust padding on buttons when the slider
 * for padding is moved. Also updates number value to show
 * the current selected amount.
 */
function adjustPadding(){
    // update padding on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.padding = `${this.value}px`;
    }

    let paddingVal = document.getElementsByClassName('padding-val');
    for (i = 0; i < paddingVal.length; i++){
        paddingVal[i].innerHTML = `${this.value}px`;
    }
    updateCode('padding-code');
    return;
}

let paddingInput = document.getElementById('padding');
paddingInput.addEventListener('input', adjustPadding);

/**
 * Function to adjust border on buttons when the slider
 * for border is moved. Also updates number value to show
 * the current selected amount.
 */
function adjustBorder(){
    // update border on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.borderWidth = `${this.value}px`;
    }
    
    let borderVal = document.getElementsByClassName('border-val');
    for (i = 0; i < borderVal.length; i++){
        borderVal[i].innerHTML = `${this.value}px`;
    } 
    updateCode('border-code');
    return;
}

let borderInput = document.getElementById('border');
borderInput.addEventListener('input', adjustBorder);

/**
 * Function to adjust margin on buttons when the slider
 * for margin is moved. Also updates number value to show
 * the current selected amount.
 */
function adjustMargin(){
    // update margin on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.margin = `${this.value}px`;
    }
    
    let marginVal = document.getElementsByClassName('margin-val');
    for (i = 0; i < marginVal.length; i++){
        marginVal[i].innerHTML = `${this.value}px`;
    } 
    updateCode('margin-code');
    return;
}

let marginInput = document.getElementById('margin');
marginInput.addEventListener('input', adjustMargin);

/**
 * Function to adjust font-size on buttons when the slider
 * for content is moved. Also updates number value to show
 * the current selected amount.
 */
function adjustContent(){
    // update content on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.fontSize = `${this.value}px`;
    }
    
    let contentVal = document.getElementsByClassName('content-val');
    for (i = 0; i < contentVal.length; i++){
        contentVal[i].innerHTML = `${this.value}px`;
    }
    updateCode('font-code');
    return;
}

let contentInput = document.getElementById('content');
contentInput.addEventListener('input', adjustContent);

function updateCode(codeType){
    let allCodeLines = document.getElementsByClassName('code-line');
    for (i = 0; i < allCodeLines.length; i++){
        allCodeLines[i].style.color = '#435260';
        allCodeLines[i].style.fontWeight = 'normal';
    }
    document.getElementById(codeType).style.color = '#007bff';
    document.getElementById(codeType).style.fontWeight = 'bold';
    return;
}