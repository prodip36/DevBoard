function time(){
    const now = new Date();
    return now.toLocaleTimeString("en-US");

}
function todayDate(){
    const today=new Date();
    return today.toDateString();
}