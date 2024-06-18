import home from '../../assets/home.svg'
import marketplace from '../../assets/marketplace.svg'
import rating from '../../assets/rating.svg'
import competition from '../../assets/competition.svg'
import organization from '../../assets/organization.svg'
import ru from '../../assets/ru.svg'
import usa from '../../assets/usa.png'
export const headerLinks = [
    {
        href: '/', 
        label: 'Лента',
        icon: home, 
    }, 
    {
        href: '/marketplace', 
        label: 'Маркетплейс',
        icon: marketplace, 
    }, 
    {
        href: '/rating', 
        label: 'Рейтинг',
        icon: rating, 
    }, 
    {
        href: '/competition', 
        label: 'Соревнования',
        icon: competition, 
    }, 
    {
        href: '/organization', 
        label: 'Организации',
        icon: organization, 
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