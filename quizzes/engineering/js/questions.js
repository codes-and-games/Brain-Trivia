let questions = [
  {
    numb: 1,
    question: "Pick up the correct statement from the following :",
    answer: "All the above",
    options: [
      "The measured stereoscopic base of photographs is obtained by dividing the air base in metres by the mean scale of the photograph",
      "The difference between the absolute parallax of two points depends upon the difference in their elevations",
      "The line joining the principal point of a photograph and the transferred principal point of the adjoining photograph, is called stereoscopic base",
      "All the above",
    ],
  },
  {
    numb: 2,
    question:
      "As per I.S. 1904-1986 the permissible angular distortion with respect to steel sructures in isolated foundations resting on plastic clay is",
    answer: "1/3000",
    options: ["2/3000", "1/3000", "1/3000", "2/200"],
  },
  {
    numb: 3,
    question:
      "Which one of the following land marks on the coast line must be depicted on hydrographic maps ?",
    answer: "All the above",
    options: ["shore line", "light houses", "church spires", "All the above"],
  },
  {
    numb: 4,
    question: "Slump test for concrete is carried out, to determine",
    answer: "Workability",
    options: ["Strength", "Durability", "Workability", "Water content"],
  },
  {
    numb: 5,
    question:
      "The distance travelled by revolving the wheel of a vehicle more than its circumferential movement, is known as",
    answer: "skid",
    options: ["slip", "skid", "All of these", "None of these"],
  },
  {
    numb: 6,
    question:
      "For determining the support reactions at A and B of a three hinged arch, points B and C are joined and produced to intersect the load line at D and a line parallel to the load line through A at D'. Distances AD, DD' and AD' when measured were 4 cm, 3 cm and 5 cm respectively. The angle between the reactions at A and B is",
    answer: "90°",
    options: ["30°", "45°", "60°", "90°"],
  },

  {
    numb: 7,
    question:
      "If the tension in a cable supporting a lift moving upwards is twice the tension when the lift is movng downwards, the acceleration of the lift, is",
    answer: "g/3",
    options: ["g/2", "g/3", "g/4", "g/5"],
  },

  {
    numb: 8,
    question: "Curing of pavements, floors, roofs and slabs, is done by",
    answer: "ponding method",
    options: [
      "membrane method",
      "ponding method",
      "covering surface with bags",
      "sprinkling water method",
    ],
  },

  {
    numb: 9,
    question:
      "A ball is dropped from a height of 2.25 m on a smooth floor and rises to a height of 1.00 m after the bounce. The coefficient of restitution between the ball and the floor is",
    answer: "0.67",
    options: ["0.33", "0.44", "0.57", "0.67"],
  },

  {
    numb: 10,
    question:
      "For designing end bearing piles of square cross-section in clays having average unconfmed compressive strength of 6 t/m2, the net ultimate bearing capacity may be taken as",
    answer: "18 t/m2",
    options: ["15 t/m2", "18 t/m2", "20 t/m2", "27 t/m2"],
  },

  {
    numb: 11,
    question:
      "Water is to be pumped at the rate of 0.025 m3/s from a 4 m deep ground level tank to an overhead tank. The difference in levels of the full tank levels of these tanks is 16 m. What is the approximate power required for operating a 65% efficient centrifugal pump ?",
    answer: "3.9 kW",
    options: ["7.5 kW", "6.0 kW", "3.9 kW", "3.2 kW"],
  },

  {
    numb: 12,
    question:
      "For clear distinct vision, images of obstructions should fall on the retina with a cone of",
    answer: "5°",
    options: ["2°", "3°", "4°", "5°"],
  },

  {
    numb: 13,
    question:
      "Consider the following statements : A high lime content in a composite cement-lime mortor results in 1. slow hardening.2. quick setting. 3. weaker mortar. Of these statements",
    answer: "2 and 1 are correct",
    options: [
      "2 and 3 are correct",
      "2 and 1 are correct",
      "1 and 3 are correct",
      "1, 2 and 3 are correct",
    ],
  },

  {
    numb: 14,
    question:
      "If p is the internal pressure in a thin cylinder of diameter d and thickness t, the developed hoop stress, is",
    answer: "Pd/2t",
    options: ["Pd/2t", "Pd/4t", "Pd/t", "2Pd/2t"],
  },

  {
    numb: 15,
    question:
      "The detention period for plain sedimentation water tanks, is usually",
    answer: "4 to 8 hours",
    options: [
      "4 to 8 hours",
      "8 to 16 hours",
      "16 to 24 hours",
      "24 to 36 hours",
    ],
  },
  {
    numb: 16,
    question:
      "For 100 sq. m cement concrete (1 : 2: 4) 4 cm thick floor, the quantity of cement required, is",
    answer: "0.94 m3",
    options: ["0.90 m3", "0.94 m3", "0.98 m3", "1.00 m3"],
  },
  {
    numb: 17,
    question:
      "A direct shear test was conducted on a cohesionless soil (c = 0) specimen under a normal stress of 200 kN/m2. The specimen failed at a shear stress of 100 kN/m2. The angle of internal friction of the soil (degrees) is",
    answer: "26.6",
    options: ["26.6", "29.5", "30.0", "32.6"],
  },
  {
    numb: 18,
    question:
      "When a rectangular beam is loaded longitudinally, shear develops on",
    answer: "every horizontal plane",
    options: [
      "bottom fibre",
      "top fibre",
      "middle fibre",
      "every horizontal plane",
    ],
  },
  {
    numb: 19,
    question:
      "Water pressure in a 80 cm water main is 10 kg/cm2. The minimum thickness of the metal required for the water main, not to be stressed more than 200 kg/cm2, is",
    answer: "2 cm",
    options: ["1 cm", "1.5 cm", "2 cm", "2.5 cm"],
  },
  {
    numb: 20,
    question: " In the cauer-2 form of LC network---------is series element and --------is shunt element respectively?",
    answer: "C and L",
    options: [
      "L and C",
      "C and L",
      "L and L",
      "C and C",
    ],
  },
  {
    numb: 21,
    question: "Lowest critical frequency is due to pole and it may be present at the origin or nearer to the origin, then the type of network is",
    answer: "RC",
    options: [
      "LC",
      "RL",
      "RC",
      "None of these",
    ],
  },
  {
    numb: 22,
    question:
      "Lowest critical frequency is due to zero and it may be present at the origin or nearer to the origin, then the type of network is",
    answer: "RL Circuit",
    options: [
      "LC Circuit",
      "RC Circuit",
      "RLC Circuit",
      "RL Circuit",
    ],
  },
  {
    numb: 23,
    question:
      "A box which tells the effect of inputs on control sub system is known as",
    answer: "Decision Box",
    options: ["Data Box", "Logical Box", "Decision Box", "State Box"],
  },
  {
    numb: 24,
    question:
      "Which system is also known as automatic control system?",
    answer: "Closed loop control system",
    options: ["Open loop control system", "Closed loop control system", "Either 1 or 2", "Nether 1 nor 2"],
  },
  {
    numb: 25,
    question: "Advantages of open loop control system is/are",
    answer: "simple and economical",
    options: ["simple and economical", "accurate", "reliable", "none of these"],
  },
  {
    numb: 26,
    question: "By using which of the following elements, mechanical translational systems are obtained?",
    answer: "all of these",
    options: [
      "mass element",
      "spring element",
      "dash-pot",
      "all of these",
    ],
  },
  {
    numb: 27,
    question:
      "The output of the system has an effect upon the input quantity, then the system is ",
    answer: "Closed loop control system",
    options: ["Open loop control system", "Closed loop control system", "Either 1 or 2", "Nether 1 nor 2"],
  },
  {
    numb: 28,
    question: "Which of the following are the disadvantages of a closed loop control system?",
    answer: "All of these",
    options: [
      "Reduces the overall gain.",
      "Complex and costly.",
      "Oscillatory response",
      "All of these",
    ],
  },
  {
    numb: 29,
    question:
      "The ratio of shearing stress to shearing strain within elastic limit, is known as",
    answer: "shear modulus of elasticity",
    options: [
      "modulus of elasticity",
      "shear modulus of elasticity",
      "bulk modulus of elasticity",
      "tangent modulus of elasticity",
    ],
  },
  {
    numb: 30,
    question: "The method of design of steel framework for greatest rigidity and economy in weight, is known as",
    answer: "Production of Antibodies",
    options: [
      "simply design",
      "semi-rigid design",
      "fully rigid design",
      "none of these",
    ],
  },
];
