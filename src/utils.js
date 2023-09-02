
import {
    Discord,
    Github,
    Instagram,
    Shazam,
    Soundcloud,
    Spotify,
    Telegram,
    Tiktok,
    Twitch,
    Yandex,
    Youtube,
    AppleMusic
} from './icons'


const linkPath = './src/assets/images/'


export const links = [
    {icon: `${linkPath}soundcloud.svg`, url: 'https://music.apple.com/ru/album/%D0%BF%D0%B0%D0%BF%D0%B8%D0%BA-single/1690188602'},
    {icon: `${linkPath}youtube.svg`, url: 'https://music.youtube.com/playlist?list=OLAK5uy_kZGoggL-nZ92ZZ0KIT0pTL1ZHfAnSqNGs'},
    {icon: `${linkPath}yandex.svg`, url: 'https://music.apple.com/ru/album/%D0%BF%D0%B0%D0%BF%D0%B8%D0%BA-single/1690188602'},
    {icon: `${linkPath}shazam.svg`, url: 'https://music.apple.com/ru/album/%D0%BF%D0%B0%D0%BF%D0%B8%D0%BA-single/1690188602'},
    {icon: `${linkPath}am.svg`, url: 'https://music.apple.com/ru/album/%D0%BF%D0%B0%D0%BF%D0%B8%D0%BA-single/1690188602'},
    {icon: `${linkPath}spotify.svg`, url: 'https://music.apple.com/ru/album/%D0%BF%D0%B0%D0%BF%D0%B8%D0%BA-single/1690188602'},
]

export const allSocial = [
    {Icon: Soundcloud, title: 'soundcloud', buttonText: 'Listen music'},
    {Icon: Youtube, title: 'youtube', buttonText: 'Listen music'},
    {Icon: Yandex, title: 'yandex', buttonText: 'Listen music'},
    {Icon: Shazam, title: 'shazam', buttonText: 'Listen music'},
    {Icon: AppleMusic, title: 'apple music', buttonText: 'Listen music'},
    {Icon: Spotify, title: 'spotify', buttonText: 'Listen music'},
    {Icon: Github, title: 'github', buttonText: "Let's go laugh"},
    {Icon: Telegram, title: 'telegram', buttonText: "Go to telegram"},
    {Icon: Instagram, title: 'instagram', buttonText: "Go to instagram"},
    {Icon: Tiktok, title: 'tiktok', buttonText: "Go to tiktok"},
    {Icon: Twitch, title: 'twitch', buttonText: "Let's go stream"},
    {Icon: Discord, title: 'discord', buttonText: "Let's go discord"},
]


export const objToArr = obj => {
    return Object.keys(obj).map(key => ({ id:key, value: obj[key] }))
}


export const albums = [
    {
        preview: './album9.gif',
        author: 'Avecoder',
        title: 'ShortlyLink',
        links: [
            {
                title: 'telegram',
                link: 'https://tg.com'
            },
            {
                title: 'github',
                link: 'https://github.com'
            }
        ]
    },
    {
        preview: './album1.jpg',
        author: 'GSPD',
        title: 'МУЗЛО',
        links: [
            {
                title: 'yandex',
                link: 'https://yandex.com'
            }
        ]
    },
    {
        preview: './album2.png',
        author: 'DK',
        title: 'Буду',
        links: [
            {
                title: 'yandex',
                link: 'https://yandex.com'
            },
            {
                title: 'spotify',
                link: 'https://yandex.com'
            }
        ]
    },
    {
        preview: './album3.jpg',
        author: 'DK',
        title: 'Ping pong',
        links: [
            {
                title: 'yandex',
                link: 'https://yandex.com'
            },
            {
                title: 'spotify',
                link: 'https://yandex.com'
            }
        ]
    },
    {
        preview: './album6.png',
        author: 'CMH',
        title: 'MDMA',
        links: [
            {
                title: 'yandex',
                link: 'https://yandex.com'
            },
            {
                title: 'spotify',
                link: 'https://yandex.com'
            }
        ]
    },
]