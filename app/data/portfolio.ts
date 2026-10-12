export type ResearchProject = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  type: string;
  status?: string;
  award?: string;
  summary: string;
  background: string[];
  problem: string[];
  objective: string;
  role: string[];
  roleGroups?: { title: string; items: string[] }[];
  methods: string[];
  workflow: string[];
  results: string[];
  interpretation: string[];
  skills: string[];
  gallery: string[];
  metrics?: { value: string; label: string; note?: string }[];
};

export const featuredResearch: ResearchProject[] = [
  {
    slug: "wafer-scale-gold-nanoparticle-patterning",
    index: "01",
    title: "Wafer-Scale Patterning of Gold Nanoparticles",
    shortTitle: "Wafer-Scale Gold Nanoparticle Patterning",
    category: "Nanomaterials · Device Fabrication",
    type: "Research Project",
    status: "Manuscript in Preparation",
    summary: "PET 기반 substrate에 Au nanoparticle coating 및 patterning 공정을 적용하고, wafer-scale device fabrication을 위한 표면처리와 공정 조건을 검토하고 있습니다.",
    background: ["PET 기반 AuNP coating 공정을 wafer-scale patterned substrate로 확장하면서 표면처리와 patterning 조건에 따른 공정 안정성을 검토했습니다.", "기판 표면 상태, AuNP coating, Photolithography와 전기적·표면 특성 측정을 하나의 공정 흐름으로 연결했습니다."],
    problem: ["코팅 균일도", "패턴 저항 편차", "표면처리 조건", "Wafer-scale 확장", "Pattern 보존", "공정 반복성"],
    objective: "PET 기판의 표면처리, AuNP coating과 Photolithography 조건을 비교해 wafer-scale pattern fabrication의 공정 안정성과 전기적 특성을 평가하는 것이 목표입니다.",
    role: ["PET 기판의 오존 및 아민기 기반 표면처리", "Au nanoparticle coating", "Photolithography 기반 patterning", "Positive / Negative PR 공정", "Mask를 이용한 노광 공정", "Maskless exposure 공정", "Wafer-scale pattern fabrication", "Probe Station을 이용한 패턴의 I-V 특성 및 저항 측정", "Stylus Profilometer를 이용한 패턴과 코팅층의 표면 단차 및 두께 특성 측정", "코팅 및 patterning 조건에 따른 표면 상태와 전기적 특성 비교"],
    methods: ["오존·아민기 기반 표면처리", "AuNP coating", "Positive / Negative PR", "Mask exposure", "Maskless exposure", "Probe Station", "Stylus Profilometer"],
    workflow: ["PR coating", "Soft Bake", "Exposure", "Development", "AuNP coating", "PR removal", "Electrical / Surface Characterization"],
    results: ["작은 PET sample에서 Au nanoparticle coating을 형성했습니다.", "Probe Station으로 패턴의 I-V 특성과 저항을 측정했습니다.", "Stylus Profilometer로 패턴과 코팅층의 표면 단차를 측정했습니다.", "표면처리와 patterning 조건에 따른 표면 상태와 전기적 특성을 비교했습니다.", "Large-area 및 patterned sample에서 나타난 균일도와 scale-up 문제를 검토했습니다."],
    interpretation: ["기판의 표면처리는 AuNP coating의 형성과 균일도에 영향을 주는 핵심 공정 조건입니다.", "Wafer-scale 공정에서는 coating 조건뿐 아니라 PR 공정, pattern 보존과 측정 반복성을 함께 검토해야 합니다."],
    skills: ["AuNP coating", "Surface functionalization", "Photolithography", "Positive / Negative PR", "Mask / Maskless exposure", "Probe Station", "Stylus Profilometer"],
    gallery: ["Wafer / PET sample 사진", "AuNP-coated PET 비교", "Patterned sample 이미지", "Surface-treatment workflow", "Coating 전후 비교", "Electrical-result plot"],
  },
  {
    slug: "self-healing-electroluminescent-device",
    index: "02",
    title: "Autonomous Self-Healing 3D Electroluminescent Device",
    shortTitle: "Autonomous Self-Healing 3D Electroluminescent Device",
    category: "Functional Materials · Device",
    type: "Functional Materials / Device Project",
    award: "2025 화학공학경진대회 은상",
    summary: "자가치유 소재와 electroluminescent structure를 결합한 기능성 소자를 제작하고 특성을 평가했습니다.",
    background: ["Self-healing gel, electrode, 3D 구조와 electroluminescent device를 결합한 기능성 소자 제작 프로젝트입니다."],
    problem: ["Self-healing gel 제작", "Electrode 제작", "DLP 3D 구조 제작", "소자 integration", "동작 및 특성 평가"],
    objective: "Self-healing material과 발광 소자를 3D 구조에 통합하고, 제작된 prototype의 동작과 self-healing 특성을 평가하는 것이 목표였습니다.",
    role: ["Self-healing gel 및 기능성 소재 제작", "Electrode 제작", "Electroluminescent device 제작", "DLP를 이용한 3D 구조 제작", "Self-healing material과 발광 소자의 integration", "3D 구조와 소자의 제작 및 조립", "제작된 소자의 동작 및 self-healing 특성 평가", "Prototype 제작 및 실험 결과 분석"],
    methods: ["Self-healing gel 제작", "기능성 소재 제조", "Electrode 제작", "Electroluminescent device 제작", "DLP 3D 구조 제작", "소자 동작 및 self-healing 특성 평가"],
    workflow: ["Self-healing gel 제작", "Electrode 제작", "DLP 3D 구조 제작", "발광 소자 제작", "Material / device integration", "동작 및 특성 평가"],
    results: ["협업을 통해 self-healing electroluminescent device prototype을 제작했습니다.", "2025 화학공학경진대회에서 은상을 수상했습니다."],
    interpretation: ["자가치유 소재 제작부터 DLP 3D 구조 및 전계발광 소자 제작, 조립과 특성 평가까지 실험을 수행했습니다."],
    skills: ["Self-healing gel", "Functional materials", "Electrode fabrication", "Electroluminescent device", "DLP", "3D structure fabrication", "Device integration"],
    gallery: ["Device prototype", "Self-healing demonstration", "EL 작동 사진 또는 영상", "Fabrication workflow", "Material / device schematic", "수상 이미지"],
  },
  {
    slug: "mg-air-battery-architecture-comsol",
    index: "03",
    title: "Design and Electrochemical Optimization of Battery Architecture for Extended UAV Flight Endurance",
    shortTitle: "Design and Electrochemical Optimization of Battery Architecture for Extended UAV Flight Endurance",
    category: "Electrochemistry · Energy Systems",
    type: "Research Project",
    status: "Manuscript in Preparation",
    summary: "초소형 UAV의 비행시간 연장을 위해 Mg-air battery의 구조와 실제 구동 조건을 함께 분석하고 있습니다. 배터리가 에너지원과 구조체 역할을 동시에 수행하도록 architecture를 설계하고, 전기화학 특성과 motor load를 연결해 평가합니다.",
    background: ["초소형 UAV의 제한된 질량 안에서 배터리가 에너지 저장과 구조적 기능을 동시에 수행하도록 battery architecture를 검토하고 있습니다.", "배터리 수준의 전기화학 평가와 실제 motor load 조건을 연결해 구동 특성을 분석합니다."],
    problem: ["제한된 UAV 질량", "에너지원·구조체 통합", "전압 및 출력 변화", "Motor load 조건", "전극·전해질 contact", "Cell architecture"],
    objective: "Mg-air battery를 UAV의 structural component로 통합하고, 1시간 이상의 장시간 비행을 목표로 cell architecture와 실제 motor 구동 조건을 함께 검토합니다.",
    role: ["Mg-air cell 제작", "전기화학 특성 평가", "Motor load 구동 시험", "Structural battery architecture 설계", "COMSOL 기반 2D 전기화학 해석"],
    roleGroups: [
      { title: "배터리 제작", items: ["Mg anode / air cathode 기반 Mg-air cell 구성", "전해질 및 separator 구성", "Hydrogel electrolyte 적용 및 cell assembly"] },
      { title: "전기화학 평가", items: ["Constant-current discharge", "Voltage / current measurement", "방전 특성 분석", "Battery architecture에 따른 전기화학 성능 비교"] },
      { title: "Motor load 평가", items: ["실제 motor와 battery를 연결한 구동 시험", "Motor load 조건에서 voltage / current 변화 측정", "배터리 방전 특성과 실제 motor 구동 특성 분석"] },
      { title: "Structural battery 설계", items: ["Battery가 에너지원과 UAV 구조체 역할을 동시에 수행하도록 architecture 설계", "별도 구조체 질량을 줄이기 위한 battery integration 방향 검토", "초소형 UAV의 제한된 질량 조건을 고려한 battery configuration 분석"] },
      { title: "COMSOL 해석", items: ["COMSOL Multiphysics 기반 2D electrochemical modeling", "Secondary Current Distribution", "Mg oxidation 및 oxygen reduction reaction을 고려한 전기화학 해석", "전해질 내 ohmic loss와 cell voltage / current behavior 분석"] },
    ],
    methods: ["Mg-air cell fabrication", "Hydrogel electrolyte", "Constant-current discharge", "Motor load test", "Structural battery architecture", "COMSOL Multiphysics", "2D electrochemical modeling", "Secondary Current Distribution"],
    workflow: ["Battery architecture 설계", "Mg-air cell 제작", "전극·전해질 contact 조정", "정전류 방전 시험", "Motor load 구동 시험", "2D COMSOL modeling", "실험 / 해석 비교"],
    results: ["Mg-air prototype을 제작했습니다.", "Battery와 실제 motor를 연결해 구동 시험을 수행했습니다.", "Constant-current discharge와 motor load 조건에서 voltage / current 변화를 측정했습니다.", "Battery architecture와 contact 조건에 따른 전기화학 특성을 비교했습니다.", "2D electrochemical model을 구축해 실험을 보완하는 해석에 활용했습니다."],
    interpretation: ["초소형 UAV의 구동 성능은 Mg-air cell의 전기화학 특성뿐 아니라 battery architecture, contact condition과 motor load의 영향을 함께 받습니다.", "COMSOL 해석에는 Secondary Current Distribution, Mg oxidation, oxygen reduction, ohmic loss와 cell voltage / current behavior를 반영했습니다.", "1시간 이상 비행은 현재 연구의 목표이며 달성 결과로 표시하지 않습니다."],
    skills: ["Mg-air cell fabrication", "Structural battery architecture", "Constant-current discharge", "Motor load evaluation", "COMSOL Multiphysics", "2D electrochemical modeling", "Secondary Current Distribution"],
    gallery: ["Mg-air prototype", "Cell-architecture schematic", "Motor / load test", "Discharge curve", "Simulation geometry", "Voltage/current distribution"],
  },
  {
    slug: "ncm622-dual-electrolyte-additives",
    index: "04",
    title: "Formation of CEI Layer and HF Removal Using Dual Electrolyte Additives for Mid-Ni Performance",
    shortTitle: "NCM622 Dual-Electrolyte Additives",
    category: "Battery Materials · Process",
    type: "Senior Course Project · 2024 Fall",
    summary: "Dual electrolyte additive의 조성과 농도를 변화시키며 NCM622 cathode의 계면 안정성, cycling performance, high-rate behavior를 비교했습니다.",
    background: ["NCM622의 성능 저하는 HF formation, interfacial instability, microcracking, CEI instability, capacity-retention loss와 연결됩니다."],
    problem: ["HF formation", "Interfacial instability", "CEI instability", "Capacity-retention loss", "High-rate performance"],
    objective: "No-additive, single-additive, dual-additive 및 농도 조건을 비교해 NCM622 cell의 cycling, high-rate, CV 거동을 평가했습니다.",
    role: ["팀 프로젝트의 전체 실험 workflow에 참여했습니다.", "Literature review, additive selection, experimental planning, composition design에 참여했습니다.", "NCM622 slurry preparation, electrode casting, vacuum drying을 수행했습니다.", "Electrolyte additive를 준비하고 coin cell을 조립했습니다.", "1C/5C cycling과 cyclic voltammetry를 비교했습니다.", "Data analysis, interpretation, 발표자료 준비에 참여했습니다."],
    methods: ["NCM622 cathode fabrication", "Slurry preparation", "Electrode casting", "Coin-cell assembly", "Electrolyte formulation", "1C / 5C cycling", "Cyclic voltammetry"],
    workflow: ["Literature review", "Additive selection", "Composition design", "Electrode fabrication", "Coin-cell assembly", "Cycling & CV", "Condition comparison"],
    results: ["No-additive, single-additive, dual-additive, 여러 농도 조건을 비교한 뒤 팀 결과로 DPS + TMSPi 조건을 선정했습니다.", "아래 수치는 개인 단독 성과가 아닌 팀 프로젝트 결과입니다."],
    interpretation: ["Electrolyte composition과 concentration은 interfacial stability 및 rate-dependent cycling behavior와 연결된 공정 변수였습니다.", "단일 기전을 단정하기보다 비교 실험을 통해 조건별 성능을 해석했습니다."],
    skills: ["Cathode fabrication", "Coin-cell assembly", "Electrolyte formulation", "Battery testing", "Cyclic voltammetry", "Experimental comparison", "Process optimization"],
    gallery: ["Electrode fabrication 사진", "Coin-cell assembly 사진", "Additive comparison diagram", "1C result plot", "5C result plot", "CV plot"],
    metrics: [{ value: "110 mAh/g", label: "1C · 50 cycles", note: "팀 프로젝트 결과" }, { value: "90.9%", label: "1C capacity retention", note: "팀 프로젝트 결과" }, { value: "53 mAh/g", label: "5C · 100 cycles", note: "팀 프로젝트 결과" }, { value: "73.6%", label: "5C capacity retention", note: "팀 프로젝트 결과" }],
  },
  {
    slug: "eco-cellution-battery-recycling",
    index: "05",
    title: "ECO-CELLUTION — Waste Li-Ion Battery Recycling Process Design",
    shortTitle: "ECO-CELLUTION",
    category: "Process Design · Recycling",
    type: "Engineering Process Design Project",
    award: "POSTECH 창의 문제 해결 장려상",
    summary: "폐 Li-ion battery의 전처리, 금속 회수, 환경 영향, 경제성을 연결한 literature-based recycling process를 설계했습니다.",
    background: ["폐배터리 recycling은 안전한 pretreatment부터 회수 공정, chemical selection, 환경 영향, cost를 하나의 sequence로 검토해야 합니다."],
    problem: ["Pretreatment sequence", "Metal recovery", "Chemical selection", "Environmental impact", "Process economics"],
    objective: "Pyrometallurgical과 hydrometallurgical approach를 비교하며 pretreatment와 post-treatment를 연결한 literature-based process concept을 설계했습니다.",
    role: ["Pretreatment와 post-treatment section을 담당했습니다.", "Discharge, disassembly, thermal treatment, crushing, washing, calcination, black-mass preparation을 설계·분석했습니다.", "Leaching, extraction, stripping, Li/Ni/Co recovery를 포함한 문헌 기반 회수 공정을 분석했습니다."],
    methods: ["Literature-based process design", "Pretreatment design", "Hydrometallurgical analysis", "Pyro / hydro comparison", "Recovery-process sequencing", "Economic / environmental consideration"],
    workflow: ["Discharge", "Disassembly", "Thermal treatment", "Crushing", "Washing / calcination", "Black mass", "Leaching / extraction", "Metal recovery"],
    results: ["Pretreatment와 post-treatment를 연결한 literature-based process design을 완성했습니다.", "POSTECH 창의 문제 해결에서 장려상을 수상했습니다."],
    interpretation: ["Recovery efficiency뿐 아니라 process sequence, chemical selection, cost, environmental impact를 함께 고려해야 했습니다.", "예상 extraction-rate improvement는 문헌 기반 설계 기대값이며 독립 실험으로 검증한 결과가 아닙니다."],
    skills: ["Chemical-process design", "Battery recycling", "Pretreatment design", "Post-treatment design", "Hydrometallurgical analysis", "Process comparison"],
    gallery: ["Recycling process flowchart", "Pretreatment sequence", "Post-treatment sequence", "Pyro vs hydro comparison", "Metal-recovery schematic", "수상 정보"],
  },
];

export const publications = [
  { title: "Wafer-Scale Patterning of Gold Nanoparticles", status: "Manuscript in Preparation" },
  { title: "Design and Electrochemical Optimization of Battery Architecture for Extended UAV Flight Endurance", status: "Manuscript in Preparation" },
  { title: "Battery Design and Energy Supply Strategies for Application-Specific Robotic Systems", status: "Review Article · Manuscript in Preparation" },
];

export const certifications = ["ADsP", "6시그마경영전문가 GB", "위험물산업기사", "컴퓨터활용능력 1급"];

export const awards = ["가천인재상", "화학공학경진대회 은상", "POSTECH 창의 문제 해결 장려상"];

export const trainingPrograms = [
  "반도체 심화과정 및 현직자 부트캠프",
  "반도체 공정 직무역량 특강",
  "이차전지 코인셀 제작 및 측정분석",
  "이차전지 부트캠프 기초이론교육",
  "PLC 기반 배터리 제조 공정 교육",
];

export const activities = [
  { title: "DK컨설턴츠 인턴", period: "2023.07.03 – 2023.07.31" },
  { title: "동서발전 풍력발전량 예측 공모전", detail: "B.D.A × 한국동서발전 × 60Hz", period: "2025.04.30 – 2025.11" },
];

export const skillGroups = [
  { title: "소재·표면", items: ["금 나노입자(AuNP) 코팅", "PET 기판 표면처리(오존·아민기)", "표면 기능화", "고분자 / 하이드로겔 제조"] },
  { title: "반도체·소자 공정", items: ["포토리소그래피(Photolithography)", "Positive / Negative PR 공정", "Mask / Maskless Exposure", "Wafer-scale Patterning", "전극 제작", "전계발광 소자 제작"] },
  { title: "전기화학·시스템", items: ["Mg-air / Coin Cell / Pouch Cell 제작", "방전 / 부하 시험", "순환 전압전류법(CV)", "전기적 특성 측정", "배터리 구조 설계"] },
  { title: "시뮬레이션·데이터 분석", items: ["COMSOL Multiphysics", "2D 전기화학 모델링", "Secondary Current Distribution", "전기화학 데이터 분석", "시계열 데이터 분석 및 예측(풍력발전량)"] },
];
