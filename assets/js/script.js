$(document).ready(function () {
  // melakukan seleksi pada elemen yang memiliki class 'card-kategori'
  const cardContainer = $(".card-kategori");

  // melakukan perulangan sebanyak 16 kali
  for (let i = 0; i <= 16; i++) {
    // membuat variable card yang untuk menampung tag a yg memiliki class 'card-th' dengan atribut href yang diambil dari banyaknya jumlah i secara berulang hingga 16 kemudian digabung dengan '.html' diakhirnya
    const card = $(
      '<a href="../kategori/th-' + [i + 1] + '.html"' + 'class="card-th"></a>'
    );

    // membuat variable cards untuk menampung isi dari tag dengan class 'card-title' dan tag 'img'
    const cards = [
      { name: "TH 1", alt: "Town Hall Level 1", image: "../assets/img/town_hall/th_1.png" },
      { name: "TH 2", alt: "Town Hall Level 2", image: "../assets/img/town_hall/th_2.png" },
      { name: "TH 3", alt: "Town Hall Level 3", image: "../assets/img/town_hall/th_3.png" },
      { name: "TH 4", alt: "Town Hall Level 4", image: "../assets/img/town_hall/th_4.png" },
      { name: "TH 5", alt: "Town Hall Level 5", image: "../assets/img/town_hall/th_5.png" },
      { name: "TH 6", alt: "Town Hall Level 6", image: "../assets/img/town_hall/th_6.png" },
      { name: "TH 7", alt: "Town Hall Level 7", image: "../assets/img/town_hall/th_7.png" },
      { name: "TH 8", alt: "Town Hall Level 8", image: "../assets/img/town_hall/th_8.png" },
      { name: "TH 9", alt: "Town Hall Level 9", image: "../assets/img/town_hall/th_9.png" },
      { name: "TH 10", alt: "Town Hall Level 10", image: "../assets/img/town_hall/th_10.png" },
      { name: "TH 11", alt: "Town Hall Level 11", image: "../assets/img/town_hall/th_11.png" },
      { name: "TH 12", alt: "Town Hall Level 12", image: "../assets/img/town_hall/th_12.png" },
      { name: "TH 13", alt: "Town Hall Level 13", image: "../assets/img/town_hall/th_13.png" },
      { name: "TH 14", alt: "Town Hall Level 14", image: "../assets/img/town_hall/th_14.png" },
      { name: "TH 15", alt: "Town Hall Level 15", image: "../assets/img/town_hall/th_15.png" },
      { name: "TH 16", alt: "Town Hall Level 16", image: "../assets/img/town_hall/th_16.png" },
    ];

    // memasukkan data card ke dalam variabel cardContainer  
    cardContainer.append(card);

    // membuat variabel cardOverlay yg akan diisi elemen div dengan class 'card-overlay'
    const cardOverlay = $('<div class="card-overlay"></div>');

    // membuat variabel cardTitle yg akan diisi tag h2 dengan class 'card-title'
    const cardTitle = $('<h2 class="card-title"></h2>');

    // memasukkan teks ke dalam cardTitle menggunakan properti 'name' yang disimpan di dalam array cards, kemudian melakukan perulangan sesuai dengan banyaknya data yg ada di dalam array cards
    cardTitle.text(cards[i].name);

    // membuat tag img
    const cardImg = $("<img>");
    // menambahkan atribut src dan alt pada tag img yg diisi dengan properti 'image' dan 'alt' yg ada di dalam array 'cards'
    cardImg.attr("src", cards[i].image);
    cardImg.attr("alt", cards[i].alt);

    // memasukkan data cardImg ke dalam variabel card
    card.append(cardImg);

    // memasukkan data cardTitle ke dalam variabel cardOverlay
    cardOverlay.append(cardTitle);

    // memasukkan data cardOverlay yg sudah berisi cardImg dan cardTitle ke dalam variabel card
    card.append(cardOverlay);

    // jika i berjumlah 15, maka perulangan dihentikan
    if (i === 15) {
      break;
    }
  }
});
