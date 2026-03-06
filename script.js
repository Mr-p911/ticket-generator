//form inputs declaration
const avatarInput = document.getElementById("avatar");
const uploadBox = document.querySelector(".uploadbox");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const gitInput = document.getElementById("git");
const namemsg = document.querySelector(".namemsg");
const emailmsg = document.querySelector(".emailmsg");
const gitmsg = document.querySelector(".gitmsg");
const generateBtn = document.getElementById("generateBtn");
const opt = document.querySelector(".opt");
const removeBtn = document.querySelector(".remimg");
const changeBtn = document.querySelector(".chgimg");
const forminput = document.querySelector(".formInput");
const ticket = document.querySelector(".ticket");



//event listener for the button


generateBtn.addEventListener("click", function(){
    emailInput.value = emailInput.value.trim().toLowerCase();
    gitInput.value = gitInput.value.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isFormFilled = true;
    if(avatarInput.files.length === 0){
        document.querySelector(".infotxt").textContent = "Please upload your photo.";
        document.querySelector(".infotxt").classList.add('error');
        isFormFilled = false;
    }else{
        document.querySelector(".infotxt").classList.remove('error');
    }
    if(nameInput.value.trim() === ""){
        nameInput.classList.add('error');
        namemsg.classList.add('error');
        isFormFilled = false;
    }else{
        nameInput.classList.remove('error');
        namemsg.classList.remove('error');
    }
    if(!emailPattern.test(emailInput.value)){
        emailInput.classList.add('error');
        emailmsg.classList.add('error');
        emailmsg.textContent = "Please enter a valid email address.";
        isFormFilled = false;
    }else{
        emailInput.classList.remove('error');
        emailmsg.classList.remove('error');
    }
    if(!gitInput.value.startsWith("@")){
        gitInput.classList.add('error');
        gitmsg.classList.add('error');
        gitmsg.textContent = "GitHub username should start with '@'";
        isFormFilled = false;
    }else{
        gitInput.classList.remove('error');
        gitmsg.classList.remove('error');
    }
    if(isFormFilled === false){
    }else{
        forminput.style.display = "none";
        ticket.style.display = "flex";
        document.querySelector(".userNameHeader").textContent = nameInput.value;
        document.querySelector(".userEmail").textContent = emailInput.value;
        document.querySelector(".gitUserName").textContent = gitInput.value;
        document.querySelector(".userName").textContent = nameInput.value;
        const file = avatarInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e){
            document.querySelector(".userAvatar").src = e.target.result;
        }
        reader.readAsDataURL(file);
        document.querySelector(".icon-container").style.display = "block";
        document.querySelector(".tuttxt").style.display = "block";
        opt.style.display = "none";
        uploadBox.style.backgroundImage = "none";
        uploadBox.style.height = "";
        uploadBox.style.opacity = "0.5";
        avatarInput.value = "";
        nameInput.value = "";
        emailInput.value = "";
        gitInput.value = "";
    }
});
avatarInput.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            //Sets the upload box to the image that was picked
            uploadBox.style.backgroundImage = `url(${e.target.result})`;
            uploadBox.style.backgroundSize = "50px 50px";   
            uploadBox.style.backgroundRepeat = "no-repeat"
            uploadBox.style.backgroundPosition = "top 25% center";
            uploadBox.style.height = "7rem";
            uploadBox.style.opacity = "1";
            opt.style.display = "flex";
            opt.style.marginTop = "3.5rem";
            //Hides the upload icon and the text below the icon
            document.querySelector(".icon-container").style.display = "none";
            document.querySelector(".tuttxt").style.display = "none";
        }
        //tells the reader to start reading the file
        reader.readAsDataURL(file);
    }
});
removeBtn.addEventListener("click", function(e){
    e.preventDefault();
    avatarInput.value = "";
    document.querySelector(".icon-container").style.display = "block";
    document.querySelector(".tuttxt").style.display = "block";
    opt.style.display = "none";
    uploadBox.style.backgroundImage = "none";
    uploadBox.style.height = "";
    uploadBox.style.opacity = "0.5";
});
changeBtn.addEventListener("click", function(e){
    e.preventDefault();
    avatarInput.value = "";
    avatarInput.click();
    opt.style.display = "none";
    uploadBox.style.backgroundImage = "none";
    uploadBox.style.height = "";
    uploadBox.style.opacity = "0.5";
    document.querySelector(".icon-container").style.display = "block";
    document.querySelector(".tuttxt").style.display = "block";
});
