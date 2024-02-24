let glavnaSlika = document.querySelector('#glavna'); 
let naslov = document.querySelector('.naslov'); 
let tekst = document.querySelector('.tekst');
let slikeSrc = ['fleabag.jpg', 'suits.jpg', '101.jpg', 'tlou.webp', 
'knock.jpg', 'prison.jpg', 'sherlock.jpg', 'chernobyl.jpg'];
let naslovi = ['Fleabag', 'Suits', 'Love 101', 'The last of us', 'Knock on my door', 
'Prison break', 'Sherlock', 'Chernobyl'];
let tekstovi = ['Fleabag" is a witty and emotionally charged comedy-drama that follows the life of a quirky and troubled young woman navigating relationships, grief, and self-discovery in modern-day London.', 'Suits" is a legal drama that revolves around a college dropout with an exceptional photographic memory who starts practicing law at a prestigious New York firm, bringing a unique blend of charm and legal acumen to the world of high-stakes corporate law.','Ask 101" (Ask 101 or Aşk 101) is a Turkish teen drama series that explores the challenges and experiences of a group of high school students, delving into themes of friendship, love, and adolescence.', 'The Last of Us" is an acclaimed show with a gripping post-apocalyptic narrative, following a hardened survivor and a young girl as they navigate a world ravaged by a deadly infection, testing the limits of humanity and compassion.', 'Knock on My Door" (Sen Çal Kapımı) is a Turkish romantic comedy series centered around a young woman who, despite her initial reservations, becomes entangled in a fake relationship that leads to unexpected and heartwarming twists.','Prison Break" is a thrilling action series that follows a man who deliberately gets himself imprisoned to help his wrongfully accused brother escape death row. Its a high-stakes, suspenseful journey filled with intricate plans and unexpected alliances.','Sherlock" is a modern adaptation of Sir Arthur Conan Doyles classic detective stories, portraying the brilliant detective Sherlock Holmes and his loyal friend Dr. John Watson as they solve complex crimes in contemporary London.','Chernobyl" is a gripping historical drama that chronicles the catastrophic nuclear disaster of 1986 at the Chernobyl Nuclear Power Plant, providing a chilling account of the events, the human cost, and the heroic efforts to contain the aftermath.'];

function promeni(ind){   
    glavnaSlika.src = 'images/' + slikeSrc[ind];   
    naslov.innerHTML = naslovi[ind];  
    tekst.innerHTML = tekstovi[ind];
}