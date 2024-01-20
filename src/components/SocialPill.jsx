import './SocialPill.css';

export function SocialPill({ children, href }) {
    return (
        <a
            className="sp-a"
            href={href}
            target="_blank"
            rel="noopener"
        >
            {children}
        </a>
    )
}