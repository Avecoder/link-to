import { useMemo } from "react"


const Link = () => {
    const isDark = useMemo(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, [])

    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6333 26.7C12.3667 26.5833 11.1167 26 10.15 24.9833C7.95 22.6667 7.95 18.8667 10.15 16.55L13.8 12.7167C14.3154 12.1682 14.9377 11.731 15.6285 11.4322C16.3193 11.1334 17.064 10.9792 17.8167 10.9792C18.5693 10.9792 19.314 11.1334 20.0048 11.4322C20.6956 11.731 21.3179 12.1682 21.8333 12.7167C24.0333 15.0333 24.0333 18.8333 21.8333 21.15L20.0167 23.0667" stroke={isDark ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.3666 13.3C27.6333 13.4167 28.8833 14 29.8499 15.0167C32.0499 17.3334 32.0499 21.1334 29.8499 23.45L26.1999 27.2834C25.6845 27.8319 25.0622 28.269 24.3714 28.5678C23.6806 28.8667 22.9359 29.0208 22.1833 29.0208C21.4306 29.0208 20.6859 28.8667 19.9951 28.5678C19.3043 28.269 18.682 27.8319 18.1666 27.2834C15.9666 24.9667 15.9666 21.1667 18.1666 18.85L19.9833 16.9334" stroke={isDark ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.9997 36.6667H24.9997C33.333 36.6667 36.6663 33.3334 36.6663 25V15C36.6663 6.66671 33.333 3.33337 24.9997 3.33337H14.9997C6.66634 3.33337 3.33301 6.66671 3.33301 15V25C3.33301 33.3334 6.66634 36.6667 14.9997 36.6667Z" stroke={isDark ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Link