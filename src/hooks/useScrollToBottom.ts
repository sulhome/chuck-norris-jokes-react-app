import { useEffect } from 'react';

export function useScrollToBottom(callback: () => void, elementId: string = 'list') {
    useEffect(() => {
        const handleScroll = () => {
            const el = document.getElementById(elementId);
            if (!el) return;

            const scrollBottom = window.scrollY + window.innerHeight;
            const listBottom = el.offsetTop + el.clientHeight;

            if (scrollBottom >= listBottom) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [callback, elementId]);
}
