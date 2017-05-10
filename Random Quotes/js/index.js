var quotes = ["Being honest with you, it's not the 'great' wall of China. It's an all right wall. It's the 'All Right Wall of China.", "I'd rather live in a cave with a view of a palace than live in a palace with a view of a cave.", "I found that being with happy positive people annoys me.", "A slug is always on its own. It's a lonely insect.", "People who live in a glass house have to answer the door.", "If you sit in a bath of pineapple chunks, it can kill you. That's well documented.", "It would be spiteful to put a Jellyfish in a trifle.", "Why didn't evolution make a giraffe good at carpentry so it could build a ladder?", "Does the brain control you or are you controlling the brain? I don't know if I'm in charge of mine.", "The Elephant Man would never have gotten up and gone, ‘Oh, God. Look at me hair today'.", "The world is getting more and more scruffier, innit?", "You won't get anything done by planning.", "At what point is a wasp ever going to have a chat with a spider?", "Jellyfish are 97% water or something, so how much are they doing? Just give them another 3% and make them water.", "At no point am I going to lick a little frogs head.", "In the sea you've got an enemy behind every rock.", "Flies used to be happy-go-lucky, on their own; the sun’s out, have a fly about. Now, there’s little attacks going on.", "A dog has got human eyes.", "I was still using my eyes even though I had them shut.", "I saw a cockroach playing Pacman.", "The thing I've found with pigeons is: they've got wings but they walk a lot.", "If you live in a glass house, don't be chucking stuff about.", "A stitch in five saves fifteen or whatever.", "Treat the world like a head.", "The Web is the new book though, innit?", "We've invented most of the stuff that we need and now we're just messing about.", "Neil Armstrong, that spaceman, he went to the moon but he ain't been back. It can't have been that good.", "If you haven't got eyes, you shouldn't have wings.", "I saw a bee have a heart attack...", "Normally you can't hear you're own voice because you're talking over it.", "Every step starts with a step.", "Blind people can stay up longer than someone with eyes.", "My brain's just full of passwords.", "Your dreams should never be better than your real life.", "You never see an old man eating a Twix", "We should have never left the sea.  No fish is homeless. No fish dies of starvation or stress.", "The Great Pyramid is overrated.  It’s bad design.  The lounge is going to be huge, but the bedroom is going to be tiny."];

function getRandomArray(arr) {
  var i;
  i = Math.floor(Math.random() * arr.length)
  return arr[i];
}

// add reverse method to jQuery Object - utilised in animate function.
jQuery.fn.reverse = [].reverse;

function animate() {
  var time = 150;
  $("#quote-area > div").reverse().each(function(index) {
    $(this).css("opacity", "0");
    $(this).delay(time).fadeTo(time, 1);
    time = time + 150;
  });
  time = 150;
}

function setQuote() {
  var currentQuote = getRandomArray(quotes);
  $("blockquote p").html('"' + currentQuote + '"' + " ");
}

$(function() {

  $("#q-text").click(function() {
    $("#q-text").effect("shake");
    setQuote();
    animate();
  });

});