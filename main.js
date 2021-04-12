var images=[
  "https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.2&permmsgid=msg-a:r7027369952740825175&th=178c4f384e82d19f&view=att&disp=safe&realattid=f_kne9mu5w1",
  "https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.1&permmsgid=msg-a:r7027369952740825175&th=178c4f384e82d19f&view=att&disp=safe&realattid=f_kne9mu440",
    "https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.3&permmsgid=msg-a:r7027369952740825175&th=178c4f384e82d19f&view=att&disp=safe&realattid=f_kne9mu6l2",
    "https://mail.google.com/mail/u/0?ui=2&ik=507cdf51f1&attid=0.4&permmsgid=msg-a:r7027369952740825175&th=178c4f384e82d19f&view=att&disp=safe&realattid=f_kne9mu723"
  ];
  var labels= [
    "Giridhar Kodali",
    "Amrutha Rekha Kodali",
    "Jhansi Rani Kodali",
    "Krishna Prasad & Jhansi Rani Kodali"
  ];
  var i= 0;
  function nextslide() {
    if (i==4) {
      i=0;
    }
      document.getElementById("album").src=images[i];
      document.getElementById("names").innerHTML=labels[i];
      i++;
  }