import home from "../../assets/home.svg";
import marketplace from "../../assets/marketplace.svg";
import rating from "../../assets/rating.svg";
import competition from "../../assets/competition.svg";
import organization from "../../assets/organization.svg";
import ru from "../../assets/ru.svg";
import usa from "../../assets/usa.png";
import vadim from "../../assets/vadim.svg";
import artem from "../../assets/artem.svg";
import maga from "../../assets/maga.svg";
import natasha from "../../assets/natasha.svg";
import boxing from "../../assets/box.svg";
import ice from "../../assets/iceice.svg";
import bike2 from "../../assets/bike2.svg";
import bike from "../../assets/bikePost.svg";
import iceicce from "../../assets/horsesport.svg";
import iceswipeBanner from "../../assets/iceBannerswiper.svg";
import post from "../../assets/3post.svg"; 
import all from '../../assets/all.svg'
import result from '../../assets/result.svg'
import video from '../../assets/video.svg'
import achieve from '../../assets/achieve.svg'
import borba from '../../assets/borba.svg'
import post1 from '../../assets/post1.svg'
import post2 from '../../assets/post2.svg'
export const headerLinks = [
  {
    href: "/",
    label: "Лента",
    icon: home,
    active: true,
  },
  {
    href: "/marketplace",
    label: "Маркетплейс",
    icon: marketplace,
    active: false,
  },
  {
    href: "/rating",
    label: "Рейтинг",
    icon: rating,
    active: false,
  },
  {
    href: "/competition",
    label: "Соревнования",
    icon: competition,
    active: false,
  },
  {
    href: "/organization",
    label: "Организации",
    icon: organization,
    active: false,
  },
];
export const filterLinks = [ 
  { 
    active:true, 
    title:'Все',
    icon:all
  },
  { 
    active:false, 
    title:'Результаты соревнований',
    icon:result
  },
  { 
    active:false, 
    title:'Видео',
    icon:video
  },
  { 
    active:false, 
    title:'Достижения',
    icon:achieve
  },
]
export const headerLang = [
  {
    label: "RU",
    icon: ru,
  },
  {
    label: "EN",
    icon: usa,
  },
];

export const mainPosts = [
  {
    title: "Илья Бессонов дал интервью для телеканала Россия-1",
    subtitle:
      "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...",
    category: "Спортивная Борьба",
    time: "12 марта, 2024 в 16:03",
    views: "4.1 K",
    comments: [
      {
        name: "Вадим Давыдов",
        title: "Наконец-то! Рад, что он вернулся в спорт",
        time: "15 минут назад",
        icon: vadim,
        isVerificated: false,
      },
      {
        name: "Артем Еременко",
        title: "Уже давно ждал интервью!",
        time: "30 секунд назад",
        icon: artem,
        isVerificated: false,
      },
      {
        name: "Константин Романов",
        title:
          "Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или  Романов, на крайняк Тищенко.",
        time: "20 минут назад",
        icon: maga,
        isVerificated: true,
      },
      {
        name: "Анастасия Осипова",
        title: "Наш чемпион! Горжусь! 🩷",
        time: "20 минут назад",
        icon: natasha,
        isVerificated: false,
      },
    ],
    images: [boxing, boxing, boxing, boxing, boxing, boxing],
  },
  {
    title: "Этапы Тура Альп-2024",
    subtitle: "Фото с соревнований",
    category: "Велоспорт",
    time: "2 февраля, 2024 в 23:09",
    views: "4.1 K",
    comments: [],
    images: [bike, bike2, bike, bike2, bike, bike],
  },
  {
    title: "Запись соревнования по вольной борьбе в Санкт-Петербурге",
    subtitle:
      "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...",
    category: "Спортивная Борьба",
    time: "12 марта, 2024 в 17:03",
    views: "82 K",
    comments: [
      {
        name: "Вадим Давыдов",
        title: "Романов молодец! 👍🏻",
        time: "15 минут назад",
        icon: vadim,
        isVerificated: false,
      },
    ],
    images: [post, post, post],
  },
];
export const news = [
  {
    category: "Спортивная борьба",
    title:
      "Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет",
    time: "2 Апреля, 14:00",
  },
  {
    category: "Велоспорт",
    title:
      "Рекорды Рушатся: Спортсмены Поднимают Планку Выше Во Всех Дисциплинах",
    time: "29 Марта, 17:52",
  },
  {
    category: "Тяжелая атлетика",
    title:
      "Неоспоримые Чемпионы: Триумф Спортивных Героев Вновь Встряхивает Мир",
    time: "20 Марта, 17:22",
  },
  {
    category: "Гандбол",
    title:
      "Грандиозные Сражения и Невероятные Победы: Горячие Новости из Спортивного Мира",
    time: "12 Марта, 17:00",
  },
  {
    category: "Конькобежный спорт",
    title:
      "Тренер по конькобежному спорту Татьяна Аксенова рассказала секреты подготовки к соревновании",
    time: "12 Февраля, 07:09",
  },
  {
    category: "Спортивная борьба",
    title: "Илья Бессонов дал интервью для телеканала Россия-1",
    time: "4 Февраля, 10:42",
  },
];

export const reccomendation = [
  { name: "Александр ", lastname:'Магомедов', icon: maga },
  { name: "Дмитрий ", lastname:'Алексеев', icon: artem },
  { name: "Амир  ",  lastname:'Магомедов',icon: vadim },
  { name: "Наталья  ", lastname:'Шалесная', icon: natasha },
]; 
export const interestedSubs = [ 
  {name: 'Александр Магомедов',subtitle: 'Спортсмен • Призер Олимпийских игр, двукратный призер чемпионатов мира', isVerificated: true, icon: maga},
  {name: 'Дмитрий Зайцев',subtitle: 'Судья • Заслуженный судья и секретарь соревнований по греко-римской борьбе', isVerificated: true, icon: artem},
  {name: 'Светлана Бессонова',subtitle: 'Спортсмен • Призер Олимпийских игр, двукратный призер чемпионатов мира', isVerificated: false, icon: vadim},
  {name: 'Андрей Романов',subtitle: 'Спортсмен • Мастер спорта СССР международного класса, заслуженный тренер СССР по греко-римской борьбе', isVerificated: false, icon: vadim},
  {name: 'Анастасия Землякова',subtitle: 'Тренер • Тренер по гандболу', isVerificated: true, icon: natasha},
] 

export const mobilePosts = [ 
  { 
    title: 'Илья Бессонов дал интервью для телеканала Россия-1', 
    subtitle: 'Спортивная Борьба • 12 марта, 2024 в 16:03', 
    icon: boxing
  },
  { 
    title: 'Результаты первого тура чемпионата по тяжелой атлетике', 
    subtitle: 'Тяжелая атлетика • 24 февраля, 2024 в 15:55',
    icon: post
  },
  { 
    title: 'Оценки и победы на фигурном конькобежном турнире', 
    subtitle: 'Конькобежный спорт • 20 февраля, 2024 в 10:15', 
    icon:ice
  },
  { 
    title: 'Ожидания от главной велогонки сезона', 
    subtitle: 'Велоспорт • 24 февраля, 2024 в 10:00', 
    icon: bike
  },
  { 
    title: 'Этапы Тура Альп-2024', 
    subtitle: 'Велоспорт • 2 февраля, 2024 в 23:09', 
    icon: bike2
  },
  { 
    title: 'Тренер по конькобежному спорту Татьяна Аксенова рассказала секреты подготовки к', 
    subtitle: 'Конькобежный спорт • 14 января, 2024 в 17:23', 
    icon: iceicce
  },
]
 
export const mobileSlider = [ 
  {
    title: 'Противостояние В Мире Спортивной Борьбы: Атлеты Превращают Тренировочные Арены в Арены Героев', 
    subtitle: 'Спортивная Борьба • 12 марта, 2024 в 16:03',  
    categories: ['#Бобьба', '#Соревнования'], 
    image: borba,
  }, 
  {
    title: 'Звездные конькобежки и тренер сборной России уезжают в Казахстан. Серьезные потери нашей команды', 
    subtitle: 'Конькобежный спорт • 14 января, 2024 в 17:23',  
    categories: ['#Коньки', '#Спортсмены'], 
    image: iceswipeBanner,
  }, 
  {
    title: 'Противостояние В Мире Спортивной Борьбы: Атлеты Превращают Тренировочные Арены в Арены Героев', 
    subtitle: 'Спортивная Борьба • 12 марта, 2024 в 16:03',  
    categories: ['#Бобьба', '#Соревнования'], 
    image: boxing,
  }, 

] 

export const competitives = [ 
  {title: 'Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет', time:'17 Марта, 14:00', locations:'Москва, Россия', image: post1}, 
  {title: 'Соревновании по греко-римской борьбе среди юношей до 16 лет памяти ЗТСССР В.А.Бормана в честь дня рождения ', time:'21 Марта, 12:30', locations:'Москва, Россия', image: post2}, 
]