import { renderHook } from '@testing-library/react';
import { useScrollToBottom } from '../hooks/useScrollToBottom';
import React from 'react';

describe('useScrollToBottom', () => {
    const elementId = 'list';

    // setting a div element
    beforeEach(() => {
        const mockEl = document.createElement('div');
        mockEl.setAttribute('id', elementId);
        Object.defineProperty(mockEl, 'offsetTop', { value: 100, configurable: true });
        Object.defineProperty(mockEl, 'clientHeight', { value: 300, configurable: true });
        document.body.appendChild(mockEl);
    });

    // clean up
    afterEach(() => {
        const el = document.getElementById(elementId);
        if (el) el.remove();
        window.scrollTo(0, 0);
        jest.clearAllMocks();
    });

    it('calls the callback when scrolled to bottom', () => {
        const callback = jest.fn();

        renderHook(() => useScrollToBottom(callback, elementId));

        // Simulate scroll just below bottom
        Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
        Object.defineProperty(window, 'innerHeight', { value: 100, writable: true });

        // Dispatch the scroll event
        window.dispatchEvent(new Event('scroll'));

        expect(callback).toHaveBeenCalled();
    });

    it('does not call callback if not scrolled to bottom', () => {
        const callback = jest.fn();

        renderHook(() => useScrollToBottom(callback, elementId));

        // Simulate scroll not far enough
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
        Object.defineProperty(window, 'innerHeight', { value: 100, writable: true });

        window.dispatchEvent(new Event('scroll'));

        expect(callback).not.toHaveBeenCalled();
    });

    it('does not call callback if element is missing', () => {
        const callback = jest.fn();

        // Remove element
        document.getElementById(elementId)?.remove();

        renderHook(() => useScrollToBottom(callback, elementId));

        Object.defineProperty(window, 'scrollY', { value: 1000, writable: true });
        Object.defineProperty(window, 'innerHeight', { value: 1000, writable: true });

        window.dispatchEvent(new Event('scroll'));

        expect(callback).not.toHaveBeenCalled();
    });
});
