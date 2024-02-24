let glavnaSlika1 = document.querySelector('#glavna1'); 
let glavnaSlika2 = document.querySelector('#glavna2');
let naslov = document.querySelector('.naslov'); 
let tekst = document.querySelector('.tekst');
let slikeSrc1 = ['die.jpg', 'furious.jpg', 'mamma.jpg', 'oppen.jpeg', 
'proposal.jpg', 'pride.jpg', 'purple.jpg', 'transporter.jpg'];
let slikeSrc2= ['die1.jpg', 'furious1.webp', 'mamma1.jpg', 'oppen1.webp', 
'proposal1.jpg', 'pride1.jpg', 'purple1.jpg', 'transporter1.jpg'];

let naslovi = ['Die hard', 'Fast and furious', 'Mamma mia', 'Oppenheimer', 'The proposal', 
'Pride and prejudice', 'Purple hearts', 'The transporter'];
let tekstovi = ['Die Hard is a classic action film that follows NYPD officer John McClane as he battles terrorists in a Los Angeles skyscraper during a Christmas party, delivering a thrilling combination of suspense, humor, and iconic moments.', 'Fast and Furious, a high-octane film franchise, is celebrated for its heart-pounding car chases, adrenaline-fueled action, and a diverse ensemble cast led by Vin Diesel. The series explores themes of family, loyalty, and extreme stunts, captivating audiences with its thrilling blend of vehicular mayhem and engaging storytelling.', 'Mamma Mia, a joyous musical extravaganza, unfolds on a picturesque Greek island as a bride-to-be seeks to discover the identity of her father, set against the backdrop of ABBAs infectious tunes. With a star-studded cast, including Meryl Streep and Amanda Seyfried, the film weaves a heartwarming tale of love and self-discovery.','Oppenheimer delves into the complex life of J. Robert Oppenheimer, the brilliant physicist whose work on the Manhattan Project led to the development of the atomic bomb. This biographical drama offers a provoking exploration of scientific responsibility, moral dilemmas, and the consequences of groundbreaking discoveries.', 'The Proposal, a romantic comedy featuring Sandra Bullock and Ryan Reynolds, unfolds as a Canadian book editor coerces her assistant into a fake engagement to avoid deportation. With hilarious antics and unexpected twists, the film delivers a delightful mix of humor, romance, and self-discovery.', 'Pride and Prejudice, an iconic adaptation of Jane Austens classic novel, paints a vivid picture of 19th-century English society. This timeless love story follows Elizabeth Bennet and Mr. Darcy as they navigate societal expectations, misunderstandings, and personal growth, showcasing themes of love, class, and individuality.','Purple Hearts, a poignant drama set against the backdrop of the Vietnam War, explores the profound impact of love and sacrifice on the lives of two Navy surgeons. With emotionally charged performances and a gripping narrative, the film delves into the complexities of war, camaraderie, and the enduring human spirit.','Transporter, an action-packed film featuring Jason Statham, follows the adventures of a skilled driver and mercenary who navigates a dangerous underworld of crime and intrigue. Known for its intense car chases, martial arts sequences, and Stathams charismatic performance.'];

function promeni(ind){   
    glavnaSlika1.src = 'images/' + slikeSrc1[ind]; 
    glavnaSlika2.src = 'images/' + slikeSrc2[ind];  
    naslov.innerHTML = naslovi[ind];  
    tekst.innerHTML = tekstovi[ind];
}
    
    