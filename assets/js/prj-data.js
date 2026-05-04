// 프로젝트 데이터 "데이터베이스"
const projects = [
    {
        title: "메트릭스 검사기",
        img: "images/project/pjt-01.jpg",
        desc: "테블릿을 활용하여 휴대성과 안정성을 확보하였습니다. USB-C, PD충전을 내장하여 인터페이스를 간소화 하였습니다.<br>Windows 기반 시스템으로 프로그램 유지 및 확장성에 좋습니다.",
        features1: ["128채널 메트릭스", "전압, 전류, 저항 분석", "메뉴얼 및 자동 측정"],
        features2: ["Window 기반 테블릿", "USB-C PD 충전", "충전 & 통신 동시 구동"]
    },
    {
        title: "PCB수동 검사기",
        img: "images/project/pjt-02.jpg",
        desc: "초기 펌웨어 다운로드 및 PCB의 동작 상태 검사.",
        features1: ["펌웨어 다운로드", "초기 설절", "다운로드 상태 확인"],
        features2: ["전원 및 전압 검사", "동작 전류 검사", "기타 시스템 상태"]
    },
    {
        title: "차량용 VCSEL 구동보드",
        img: "images/project/pjt-03.jpg",
        desc: "Multi-Layer, Build-up PCB 설계 및 고속 VCSEL 구동",
        features1: ["24MHz 동기 제어", "내부 MCU구동 및 환경 감시", "방열등 Mechanical 설계 반영"],
        features2: ["External Sync 구동", "15A급 Current Drive", ""]
    },
    {
        title: "EOL 검사기",
        img: "images/project/pjt-04.jpg",
        desc: "산업용 전원 및 시그널 장치를 이용한 EOL 검사 장치",
        features1: ["19inch 통신 Rack 적용", "산업용 PC 적용", "측정기 및 전원장치 인터페이스"],
        features2: ["이동식 Rack 마운트", "Module Rack 마운트", "UPS 전원장치"]
    },
    {
        title: "태양광 조명장치",
        img: "images/project/pjt-05.jpg",
        desc: "PV(Photovoltaics)를 이용한 40W급 태양광 LED 조명장치로 PV 및 LED등 다양한 상태를 모니터링하며 최상의 상태로 충/방전을 지원 하고 있습니다.",
        features1: ["MPPT 베터리 충전 컨트롤", "과 충전 및 방전 보호", "CP&CV 충전모드 자동"],
        features2: ["LED 스케쥴 구동", "Self 자기 진단 및 알림", "외부 파라미터 입/출력"]
    },
    {
        title: "Mini LED 전기 검사기",
        img: "images/project/pjt-06.jpg",
        desc: "TV Back-light LED 모듈의 EOL 검사기. Maintenance를 위해 서브렉을 적용하여 1024채널을 분리 관리 할 수 있습니다.",
        features1: ["상위 장치 인터페이스", "1024채널 병렬 구동", "서브렉 인터페이스"],
        features2: ["5uA Leakage 측정", "1~200mA 구동 전류 측정", "양산용 POGO-pin JIG 개발"]
    },
    {
        title: "Mini LED 광학 검사기",
        img: "images/project/pjt-07.jpg",
        desc: "TV Back-ling LED 모듈의 EOL 검사기. 광학 측정을 위해 전체 점등을 하며 내부 또는 외부 점등 컨트롤러를 적용 할 수 있습니다.",
        features1: ["자체 점등 컨트롤러 내장", "고객 점등 컨크롤러 적용", "양산용 POGO-pin JIG 개발"],
        features2: ["1uA ~ 200mA(@Vf:150VDC) LED 구동", "LED-Module build-up IC구동", ""]
    },
    {
        title: "ToF 모듈",
        img: "images/project/pjt-08.jpg",
        desc: "장애물 감지 및 기타 이동 물체 감시 및 분석을 위한 모듈",
        features1: ["장애물 거리 측정", "이동 물제 측정", "이동 방향 측정"],
        features2: ["사용자 지정 파라미터 설정", "측정 방향 및 거리 설정", "High&Low 거리 측정 및 분석"]
    },
    {
        title: "환경 감시 장치",
        img: "images/project/pjt-09.jpg",
        desc: "산업용 환경 감시를 위해 다양한 센서를 적용하여 자료를 수집하고 웹 섭서에 데이터를 전송하는 장치 입니다.",
        features1: ["Gyro 센서 x,y,z축 감시", "진동 센서 적용", "EtherNet 인터페이스 TCP/IP 통신"],
        features2: ["Zigbee적용 감시 영역내 무선 연결", "자체 Data logger", ""]
    },
    {
        title: "차량용AVN검사기",
        img: "images/project/pjt-10.jpg",
        desc: "차량용 AVE(Audio Video Navigation) EOL 검사기",
        features1: ["AVN 장치 환경 설정", "Hi/Low-CAN 및 EtherNet 검사", "Anlogo ↔ Digital 신호 변환"],
        features2: ["19inch Rack 설계 제작", "각종 검사용 통신 장비 연결", "기능 검사별 서브렉 적용"]
    },
    {
        title: "차량용AVN검사기",
        img: "images/project/pjt-11.jpg",
        desc: "차량용 맵 정보 장치 양산용 EOL 검사기",
        features1: ["Map simulator 통신 제어", "Analog ↔ Digital 신호 변환", "안전 센서 및 사용자 설정 운영 시스템 적용"],
        features2: ["19inch Rack 설계 제작", "제품 안착 위치 센서 및 기타 보호 회로 적용", "특징 E"]
    },
    {
        title: "",
        img: "",
        desc: "",
        features1: ["", "", ""],
        features2: ["", "", ""]
    },
    {
        title: "",
        img: "",
        desc: "",
        features1: ["", "", ""],
        features2: ["", "", ""]
    },
    {
        title: "",
        img: "",
        desc: "",
        features1: ["", "", ""],
        features2: ["", "", ""]
    },
    {
        title: "",
        img: "",
        desc: "",
        features1: ["", "", ""],
        features2: ["", "", ""]
    },
    // 1페이지 5개분량을 쭉 작성합니다.
];
