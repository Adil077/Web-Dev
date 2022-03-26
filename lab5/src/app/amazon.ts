export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    rating: number;
    category: number;
    likes: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'External Hard Drive',
      price: 59.99,
      description: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)',
      image: '../assets/img/1.jpg',
      rating: 185023,
      link: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=lp_16225009011_1_8',
      category: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Computer Monitors by Sceptre',
      price: 139.97,
      description: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
      image: '../assets/img/2.jpg',
      rating:  17167,
      link: 'https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=lp_16225009011_1_9?th=1',
      category: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Computer Keyboard & Mouse Combos',
      price: 23.90,
      description: 'Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for PC, Laptop',
      image: '../assets/img/3.jpg',
      rating: 61536,
      link: 'https://www.amazon.com/Logitech-MK270-Wireless-Keyboard-Mouse/dp/B079JLY5M5/ref=lp_16225009011_1_10',
      category: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Cellphone',
      price: 8.97,
      description: 'Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass',
      image: '../assets/img/4.jpg',
      rating:  292358,
      link: 'https://www.amazon.com/AILUN-Protector-Compatible-Tempered-Anti-Scratch/dp/B07H2V5YLH/ref=lp_16225009011_1_11',
      category: 1,
      likes: 0
    },
  
    {
      id: 5,
      name: 'Cartridge',
      price: 213,
      description: 'Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink | 3YM57AN',
      image: '../assets/img/5.jpg',
      rating:  18145,
      link: 'https://www.amazon.com/HP-Cartridge-Black-3YM57AN-Tri-Color/dp/B08412PTS8/ref=lp_16225009011_1_12',
      category: 1,
      likes: 0
    },
    {
      id: 6,
      name: 'Fujifilm',
      price: 15.15,
      description: 'Fujifilm Instax Mini Instant Film Twin Pack (White)',
      image: '../assets/img/6.jpg',
      rating:  86634,
      link: 'https://www.amazon.com/Fujifilm-INSTAX-Instant-Twin-Pack/dp/B00EB4ADQW/ref=sr_1_21?qid=1647153263&s=electronics&sr=1-21&th=1',
      category: 2,
      likes: 0
    },
    { 
      id: 7,
      name: 'SanDisk',
      price: 16.09,
      description: 'SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA',
      image: '../assets/img/7.jpg',
      rating: 130950,
      link: 'https://www.amazon.com/SanDisk-128GB-MicroSDXC-Memory-Adapter/dp/B08GYKNCCP/ref=sr_1_23?qid=1647153263&s=electronics&sr=1-23',
      category: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'WAVLINK USB 3.0',
      price: 99.86,
      description: 'WAVLINK USB 3.0 and USB C Universal Laptop Docking Station Dual Monitor with HDMI & DVI/VGA with Gigabit Ethernet, 6 USB Ports, Audio for Laptop, Ultrabook and PCs, More Efficient Home Office',
      image: '../assets/img/8.jpg',
      rating:  130950,
      link: 'https://www.amazon.com/Wavlink-Universal-Docking-Ethernet-Ultrabook/dp/B019XOJ874/ref=pd_rhf_se_s_pd_crcd_4/131-8933816-4140524?pd_rd_w=RitiD&pf_rd_p=ecb2692f-0365-4eca-a102-58ef51a608ce&pf_rd_r=Q9VVVYSQDGB5YAY7T9N3&pd_rd_r=ae01eb34-b655-42b5-aacd-3f6ee25f1684&pd_rd_wg=ioIHM&pd_rd_i=B019XOJ874&th=1',
      category: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Case for iPhone 11',
      price: 28.70,
      description: 'OTTERBOX COMMUTER SERIES Case for iPhone 11 - MINT WAY (SURF SPRAY/AQUIFER)',
      image: '../assets/img/9.jpg',
      rating: 2741,
      link: 'https://www.amazon.com/OtterBox-COMMUTER-Case-iPhone-11/dp/B07W3Q2HLX/ref=pd_rhf_se_s_pd_crcd_15/131-8933816-4140524?pd_rd_w=RitiD&pf_rd_p=ecb2692f-0365-4eca-a102-58ef51a608ce&pf_rd_r=Q9VVVYSQDGB5YAY7T9N3&pd_rd_r=ae01eb34-b655-42b5-aacd-3f6ee25f1684&pd_rd_wg=ioIHM&pd_rd_i=B07W3Q2HLX&psc=1',
      category: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Monitor',
      price: 213.00,
      description: 'LG 24MP400-B 24” Full HD (1920 x 1080) IPS Display with 3-Side Virtually Borderless Design, AMD FreeSync and OnScreen Control – Black',
      image: '../assets/img/10.jpg',
      rating:  4581,
      link: 'https://www.amazon.com/LG-24MP400-B-Virtually-Borderless-FreeSync/dp/B097NWD3TL/ref=pd_rhf_se_s_pd_crcd_18/131-8933816-4140524?pd_rd_w=RitiD&pf_rd_p=ecb2692f-0365-4eca-a102-58ef51a608ce&pf_rd_r=Q9VVVYSQDGB5YAY7T9N3&pd_rd_r=ae01eb34-b655-42b5-aacd-3f6ee25f1684&pd_rd_wg=ioIHM&pd_rd_i=B097NWD3TL&psc=1',
      category: 2,
      likes: 0
    },
    {
      id: 11,
      name: 'Xbox Series S',
      price: 113.00,
      description: 'Enjoy over 100 games right out of the box with a 1 month Xbox Game Pass trial',
      image: '../assets/img/11.jpg',
      rating:  12407,
      link: 'https://www.amazon.com/Xbox-S/dp/B08G9J44ZN/ref=lp_16225016011_1_6',
      category: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Xbox Core ',
      price: 49.00,
      description: 'Experience the modernized design of the Xbox Wireless Controller in Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay with battery usage up to 40 hours.',
      image: '../assets/img/12.jpg',
      rating:  63130,
      link: 'https://www.amazon.com/Xbox-Core-Controller-Carbon-Black-one/dp/B08DF248LD/ref=lp_16225016011_1_7',
      category: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Xbox Series S',
      price: 298.99,
      description: 'Get the all-digital Xbox Series S – Fortnite & Rocket League Bundle featuring the Midnight Drive Pack, 1,000 V-Bucks, and 1,000 Rocket League credits.',
      image: '../assets/img/13.jpg',
      rating:  4581,
      link: 'https://www.amazon.com/Xbox-S-Fortnite-Rocket-League-Bundle/dp/B09H73LTM6/ref=lp_16225016011_1_8',
      category: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Elden Ring - PlayStation 5',
      price: 59.99,
      description: 'ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware',
      image: '../assets/img/14.jpg',
      rating:  300,
      link: 'https://www.amazon.com/Elden-Ring-PlayStation-5/dp/B09743F8P6/ref=lp_16225016011_1_9?th=1',
      category: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Mario Kart 8 Deluxe - Nintendo Switch',
      price: 213.00,
      description: 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere. Race your friends or battle them in a revised battle mode for new and returning battle courses',
      image: '../assets/img/15.jpg',
      rating:  58040,
      link: 'https://www.amazon.com/Mario-Kart-8-Deluxe-Nintendo-Switch/dp/B01N1037CV/ref=lp_16225016011_1_10',
      category: 3,
      likes: 0
    },
    {
      id: 16,
      name: 'Oculus Quest',
      price: 213.00,
      description: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB',
      image: '../assets/img/16.jpg',
      rating:  35986,
      link: 'https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=lp_16225016011_1_1?th=1',
      category: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Oculus Quest 2 ',
      price: 333.00,
      description: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB',
      image: '../assets/img/17.jpg',
      rating:  35986,
      link: 'https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B09B8DQ26F/ref=lp_16225016011_1_2?th=1',
      category: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Nintendo Switch – OLED Model w/ White Joy-Con',
      price: 336.00,
      description: 'Enjoy over 100 games right out of the box with a 1 month Xbox Game Pass trial',
      image: '../assets/img/18.jpg',
      rating:  1231,
      link: 'https://www.amazon.com/Nintendo-Switch-OLED-Model-White-Joy/dp/B098RKWHHZ/ref=lp_16225016011_1_3?th=1',
      category: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Pokémon Legends: Arceus - Nintendo Switch',
      price: 54.00,
      description: 'Unleash moves in the speedy agile style or the powerful strong style in battles',
      image: '../assets/img/19.jpg',
      rating:  6156,
      link: 'https://www.amazon.com/Pokemon-Legends-Arceus-Nintendo-Switch/dp/B0914YGQSH/ref=lp_16225016011_1_4',
      category: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'Nintendo Switch ',
      price: 263.00,
      description: 'Nintendo Switch with Neon Blue and Neon Red JoyCon - HAC-001(-01)',
      image: '../assets/img/20.jpg',
      rating:  70041,
      link: 'https://www.amazon.com/Nintendo-Switch-Neon-Blue-Joy%E2%80%91/dp/B07VGRJDFY/ref=lp_16225016011_1_5?th=1',
      category: 4,
      likes: 0
    },
  
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */