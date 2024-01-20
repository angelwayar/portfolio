import './Badge.css';

export function Badge({ children }) {
    return (
        <span className='span-badge'>
            <div>
                {children}
            </div>
        </span>
    )
}