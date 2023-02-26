import gola from '@Assets/Images/Brand/bg_gola.jpg';
import comoninoz from '@Assets/Images/Brand/bg_comoninoz.jpg';
import wStandard from '@Assets/Images/Brand/bg_w.standard.jpg';
import deliccent from '@Assets/Images/Brand/bg_deliccent.jpg';
import outdoorProducts from '@Assets/Images/Brand/bg_outdoor_products.jpg';
import oceanPacific from '@Assets/Images/Brand/bg_ocean_pacific.jpg';
import ordinaryHoliday from '@Assets/Images/Brand/bg_ordinary_holiday.jpg';
import fieldWorker from '@Assets/Images/Brand/bg_field_worker.jpg';

interface BrandBackgroundProps {
  key: string;
  src: string;
  topText: string;
  title: string;
  desc: string[];
  href: string;
}
export const BRAND_BACKGROUNDS: BrandBackgroundProps[] = [
  {
    key: 'GOLA',
    src: gola,
    topText: 'HERITAGE AND LIFE STYLE CASUAL WEAR',
    title: '골라',
    desc: [
      '골라는 1905년 영국 레스터 지방에서 탄생한 골라 클래식은',
      '영국 헤리티지와 라이프스타일을 담은 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'COMONINOZ',
    src: comoninoz,
    topText: 'UNISEX DAILY CASUALWEAR',
    title: '꼬모니노즈',
    desc: [
      '꼬모니노즈는 ‘EASY & COZY ’라는 슬로건과 함께',
      '더 많은 것을 느끼고 조금 덜 생각할 수 있는 미니멀 라이프를 생각하며',
      '단순함 속에서도 작은 즐거움을 찾을 수 있는 옷을 만드는 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'W.STANDARD',
    src: wStandard,
    topText: 'SIMPLE IS BEST THINGS',
    title: '더블유스탠다드',
    desc: [
      '일상에서 입는 즐거움을 찾을 수 있도록, 새롭게 변화하는 트렌드 아이템을',
      '다양한 이들이 쉽게 접근할 수 있게 풀어내는 캐주얼웨어 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'DELICCENT',
    src: deliccent,
    topText: 'OUR ANGELA WISHES YOUR HAPPINESS',
    title: '델리센트',
    desc: [
      'Meet an angel!',
      '델리센트는 사랑스러운 당신을 위한 모든 것을 만드는',
      '행운을 전달하는 전도사 “ANGELA”가 꿈꾸는 러블리 감성 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'OUTDOOR PRODUCTS',
    src: outdoorProducts,
    topText: 'OUTDOOR PRODUCTS',
    title: '아웃도어 프로덕츠',
    desc: [
      'Altshule brothers가 1973년에 설립하였으며, 장소와 계절에 관계없이 편안함과',
      '새로운 변화를 추구하는 21세기 라이프스타일 브랜드입니다.',
      'OUTDOOR PRODUCTS는 일상생활에 필요한 베이직한 요소를 기반으로',
      '실용적이고 기능적인 디테일을 접목한 클래식한 아이템을 제공하는 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'OCEAN PACIFIC',
    src: oceanPacific,
    topText: 'CITY LIFE FROM THE OCEAN',
    title: '오션퍼시픽',
    desc: [
      '오션 퍼시픽은 1972년 서퍼들의 요구를 만족시키는 어패럴 브랜드를',
      '시작으로 현재는 서프 컬처를 비롯한 시티&비치 라이프스타일을',
      '스트릿으로 옮긴 다양한 스타일을 선보이고 있는 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'ORDINARY HOLIDAY',
    src: ordinaryHoliday,
    topText: 'BE HAPPY ORDINARY DAY',
    title: '오디너리홀리데이',
    desc: [
      '“YOUNG VIBE”를 컨셉으로 다양한 가치관과',
      '문화 속에서 살고 있는 그들의 문화를 상품으로 재해석한 브랜드입니다.',
    ],
    href: '',
  },
  {
    key: 'FIELD WORKER',
    src: fieldWorker,
    topText: 'COMFORT, EASY TO WEAR',
    title: '필드워커',
    desc: [
      '필드워커는 “일상의 영역에서 데님의 가치를 찾는 작업”',
      '모티브로 “오늘의 아웃핏을 완성시키는 데님의 역할”을 위해 COMFORT,',
      'EASY TO WEAR 그리고 QUALITY의 가치를 추구하는 데님 웨어 브랜드입니다.',
    ],
    href: '',
  },
];
