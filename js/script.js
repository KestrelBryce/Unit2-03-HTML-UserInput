function enterClicked () {
  // this function gets user's name street name and number and displays it back to user

  // get first name from text field
  let fname = document.getElementById("first-name").value
  // get street name from text field
  let sname = document.getElementById("street-name").value
	// get street number from text field and cast it to integer
  let snumber = parseInt(document.getElementById("street-number").value)

  // display name street name and street number back to user
  document.getElementById('user-info').innerHTML = "Oh, ok. Hi, " + fname + 
  ". Thanks for giving us a safe place to go. I dont's think I've ever been to " + snumber + + sname + " street myself, but it sounds familliar. I feel like I've heard of it somewhere... I'm honestly just glad to see that someone at least know's we're here. I didn't have much hope of survival before, but maybe you can help. Thanks for giving me hope. in return, I managed to take a picture of one of those things outside a few hours ago. I know I should probably conserve my phone battery, but I wanted to share what was happening here and I needed a clear shot. Anyways, you should be able to see it with this: https://static.wikia.nocookie.net/creepypasta-biographies/images/4/4a/Rake_large.jpg/revision/latest?cb=20180808155547"
}