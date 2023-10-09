import { useEffect, useRef } from 'react';
export function useScrollToSelected(selectedFixtureId) {
    const containerRef = useRef(null);
    const selectedRef = useRef(null);
    useEffect(() => {
        const { current: selectedEl } = selectedRef;
        const { current: containerEl } = containerRef;
        if (containerEl && selectedEl && !isVisibleInside(selectedEl, containerEl))
            selectedEl.scrollIntoView({ block: 'center' });
    }, [selectedFixtureId]);
    return { containerRef, selectedRef };
}
function isVisibleInside(element, container) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return (containerRect.top < elementRect.top &&
        elementRect.bottom < containerRect.bottom);
}
