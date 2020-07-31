const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    signedIn.hidden = false;
    signedOut.hidden = true;
    console.log(user);
    userDetails.innerHTML = `<h3>Hello ${user.displayName}</h3>`;
  } else {
    signedIn.hidden = true;
    signedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});
