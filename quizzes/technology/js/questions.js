let questions = [
  {
    numb: 1,
    question:
      "From what location are the 1st computer instructions available on boot up?",
    answer: "ROM BIOS",
    options: ["ROM BIOS", "CPU", "boot.ini", "CONFIG.sys"],
  },
  {
    numb: 2,
    question: "What does PoP stand for? ",
    answer: "Post Office Protocol",
    options: ["Pre Office Protocol", "Post Office Protocol", "Protocol of Post", "None"],
  },
  {
    numb: 3,
    question: "What is the numbers of layers in the OSI Model?",
    answer: "7 layers",
    options: ["2 layers", "4 layers", "7 layers", "9 layers"],
  },
  {
    numb: 4,
    question:
      "The full form of OSI is?",
    answer: "Open system interconnection",
    options: ["Open system interface", "OPtical system interconnection", "Open system interconnection", "Operating System Internet"],
  },
  {
    numb: 5,
    question: "Identify the layer which provides service to the user.",
    answer: "Application Layer",
    options: ["Session Layer", "Application Layer", "Presentation Layer", "Physical Layer"],
  },
  {
    numb: 6,
    question:
      "Who is the father of Computer?",
    answer: "Charles Babbage",
    options: ["Charles Babbage", "Larry Page", "Archemedis", "Bill Gates"],
  },

  {
    numb: 7,
    question:
      "What does a set of rules define?",
    answer: "Protocol",
    options: ["SMTP", "FTP", "IMAP", "Protocol"],
  },

  {
    numb: 8,
    question: "Identify among the following which is mainly used to host web site",
    answer: "Web Server",
    options: ["Web Server", "Mail Server", "Database Server", "None of these"],
  },

  {
    numb: 9,
    question: "Identify the full form of HTTP?",
    answer: "HyperText Transfer Protocol",
    options: ["HyperText Transfer Protocol", "HyperText Transfer Package", "Hyper Transfer Text Protocol", "HyperText Transfer Practice"],
  },

  {
    numb: 10,
    question: "Identify the protocol primarily used for browsing data.",
    answer: "HTTP",
    options: [
      "TCP",
      "FTP",
      "HTTP",
      "TFTP",
    ],
  },

  {
    numb: 11,
    question:
      "Identify the total versions of IP",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
  },

  {
    numb: 12,
    question:
      "Identify the first network which was based on TCP/IP protocol",
    answer: "ARPANET",
    options: ["ARPANET", "HUB", "Ethernet Card", "Router"],
  },

  {
    numb: 13,
    question:
      "Choose among the following, which is the most common internet protocol.",
    answer: "SMTP",
    options: ["PPP", "FTP", "TCP/IP", "SMTP"],
  },

  {
    numb: 14,
    question:
      "What does TCP/IP stand for?",
    answer: "Transmission control protocol/Internet protocol.",
    options: [
      "Telephone control protocol/Internet protocol.",
      "Transmission control protocol/Internet protocol.",
      "Transmission control protocol/International protocol.",
      "None",
    ],
  },

  {
    numb: 15,
    question: "Which of the following layer isn’t present in the TCP/IP model but is included in the OSI model?",
    answer: "Session Layer",
    options: [
      "Network Layer",
      "Session Layer",
      "Application Layer",
      "Transport Layer",
    ],
  },
  {
    numb: 16,
    question: "What is the collection of the hyperlinked document on the internet known as",
    answer: "WWW",
    options: ["HTML", "Email", "WWW", "Internet"],
  },
  {
    numb: 17,
    question: "What is the location of a resource on the internet given by?",
    answer: "URL",
    options: ["Email", "IP", "Protocol", "URL"],
  },
  {
    numb: 18,
    question:
      "Identify the incorrect network topology",
    answer: "P2P",
    options: [
      "BUS",
      "Star",
      "P2P",
      "Ring",
    ],
  },
  {
    numb: 19,
    question:
      "Choose the port number of FTP.",
    answer: "21",
    options: ["23", "21", "110", "143"],
  },
  {
    numb: 20,
    question: "What is the length of the IPv4 address?",
    answer: "32 bits",
    options: [
      "8 bits",
      "16 bits",
      "32 bits",
      "64 bits",
    ],
  },
  {
    numb: 21,
    question: "What is the length of the IPv6 address?",
    answer: "128 bits",
    options: [
      "8 bits",
      "16 bits",
      "32 bits",
      "128 bits",
    ],
  },
  {
    numb: 22,
    question:
      "What is the term used when the main server sends mail to another mail server?",
    answer: "SMTP",
    options: [
      "FTP",
      "SMTP",
      "TCP/IP",
      "MIME",
    ],
  },
  {
    numb: 23,
    question:
      "What is the port number of SMTP?",
    answer: "25",
    options: ["110", "143", "25", "99"],
  },
  {
    numb: 24,
    question:
      "What does MIME stand for?",
    answer: "Multipurpose Internet Mail Extension",
    options: ["Multipurpose Internet Mail Extra", "Multipurpose Internet Mail End", "Multipurpose Internet Mail Email", "Multipurpose Internet Mail Extension"],
  },
  {
    numb: 25,
    question: "What does port number 143 refer to?",
    answer: "IMAP",
    options: ["SMTP", "FTP", "IMAP", "POP"],
  },
  {
    numb: 26,
    question: "Identify among the following the network device used to connect two dis-similar types of networks",
    answer: "Gateway",
    options: [
      "Switch",
      "Hub",
      "Bridge",
      "Gateway",
    ],
  },
  {
    numb: 27,
    question:
      "Identify the device used to boost up a weak signal",
    answer: "Repeater",
    options: [
      "Modem",
      "Repeater",
      "Switch",
      "Router",
    ],
  },
  {
    numb: 28,
    question: "What does MAC stand for?",
    answer: "Media Access Control",
    options: [
      "Mass Access Control",
      "Media Access Control",
      "Media Access Carriage",
      "None",
    ],
  },
  {
    numb: 29,
    question:
      "What is the length of the MAC address?",
    answer: "48 bits",
    options: [
      "8 bits",
      "16 bits",
      "32 bits",
      "48 bits",
    ],
  },
  {
    numb: 30,
    question:
      "Which of the following is used to allocate and manage resources for a network?",
    answer: "Server",
    options: [
      "Bluetooth",
      "Server",
      "Node",
      "None Of These",
    ],
  },
];
