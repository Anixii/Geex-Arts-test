import home from '../../assets/home.svg'
import marketplace from '../../assets/marketplace.svg'
import rating from '../../assets/rating.svg'
import competition from '../../assets/competition.svg'
import organization from '../../assets/organization.svg'
import ru from '../../assets/ru.svg'
import usa from '../../assets/usa.png'
import vadim from '../../assets/vadim.svg'
import artem from '../../assets/artem.svg'
import boxing from '../../assets/box.svg'
import bike from '../../assets/bikePost.svg' 
import post from '../../assets/3post.svg' 
export const headerLinks = [
    {
        href: '/', 
        label: 'Лента',
        icon: home,  
        active: true
    }, 
    {
        href: '/marketplace', 
        label: 'Маркетплейс',
        icon: marketplace, 
        active: false
    }, 
    {
        href: '/rating', 
        label: 'Рейтинг',
        icon: rating, 
        active: false
    }, 
    {
        href: '/competition', 
        label: 'Соревнования',
        icon: competition, 
        active: false
    }, 
    {
        href: '/organization', 
        label: 'Организации',
        icon: organization, 
        active: false
    }, 

] 

export const headerLang = [
    {
        label: 'RU', 
        icon: ru
    },
    {
        label: 'EN', 
        icon: usa
    },
] 

export const mainPosts = [ 
    { 
        title: 'Илья Бессонов дал интервью для телеканала Россия-1', 
        subtitle: 'Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...', 
        category: 'Спортивная Борьба', 
        time:'12 марта, 2024 в 16:03', 
        views: '4.1 K', 
        comments: [ 
            {name: 'Вадим Давыдов', title:'Наконец-то! Рад, что он вернулся в спорт', time: '15 минут назад', icon: vadim, isVerificated: false},
            {name: 'Артем Еременко', title:'Уже давно ждал интервью!', time: '30 секунд назад', icon: artem, isVerificated: false},
            {name: 'Константин Романов', title:'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или  Романов, на крайняк Тищенко.', time: '20 минут назад', icon: artem, isVerificated: true},
            {name: 'Анастасия Осипова', title:'Наш чемпион! Горжусь! 🩷', time: '20 минут назад', icon: artem, isVerificated: false},
        ], 
        images: [boxing,boxing,boxing,boxing,boxing,boxing,]
    },
    { 
        title: 'Этапы Тура Альп-2024', 
        subtitle: 'Фото с соревнований', 
        category: 'Велоспорт', 
        time:'2 февраля, 2024 в 23:09', 
        views: '4.1 K', 
        comments: [], 
        images: [bike,bike,bike,bike,bike,bike]
    },
    { 
        title: 'Запись соревнования по вольной борьбе в Санкт-Петербурге', 
        subtitle: 'Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...', 
        category: 'Спортивная Борьба', 
        time:'12 марта, 2024 в 17:03', 
        views: '82 K', 
        comments: [ 
            {name: 'Вадим Давыдов', title:'Романов молодец! 👍🏻', time: '15 минут назад', icon: vadim, isVerificated: false}
        ], 
        images: [post,post,post]
    },
] 
export const news = [ 
    {
        category: 'Спортивная борьба',
        title: 'Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет', 
        time: '2 Апреля, 14:00',
    },
    {
        category: 'Велоспорт',
        title: 'Рекорды Рушатся: Спортсмены Поднимают Планку Выше Во Всех Дисциплинах', 
        time: '29 Марта, 17:52',
    },
    {
        category: 'Тяжелая атлетика',
        title: 'Неоспоримые Чемпионы: Триумф Спортивных Героев Вновь Встряхивает Мир', 
        time: '20 Марта, 17:22',
    },
    {
        category: 'Гандбол',
        title: 'Грандиозные Сражения и Невероятные Победы: Горячие Новости из Спортивного Мира', 
        time: '12 Марта, 17:00',
    },
    {
        category: 'Конькобежный спорт',
        title: 'Тренер по конькобежному спорту Татьяна Аксенова рассказала секреты подготовки к соревновании', 
        time: '12 Февраля, 07:09',
    },
    {
        category: 'Спортивная борьба',
        title: 'Илья Бессонов дал интервью для телеканала Россия-1', 
        time: '4 Февраля, 10:42',
    },

]