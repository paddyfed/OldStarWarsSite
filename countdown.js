// countdown

<!-- Original:  Alan Palmer -->
<!-- Web Site:  http://www.jsr.communitech.net -->
<!-- Begin
var date = new Date("July 17, 2002");
var description = "Episode II: Attack of the Clones";
var now = new Date();
var diff = date.getTime() - now.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write("<center><h3>")
if (days > 1) {
document.write(days+1 + " days left until<BR>" + description);
}
else if (days == 1) {
document.write("Only two days left until<BR>" + description);
}
else if (days == 0) {
document.write("It's nearly time for<BR>" + description);
}
else {
document.write("EPISODE II: ATTACK OF THE CLONES<BR>OPENS TODAY");
}
document.write("</h3></center>");
// End -->