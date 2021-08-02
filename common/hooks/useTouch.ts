import * as React from 'react';
import { useDebounce } from './useDebounce';

export function useTouch() {
    const [touchStart, setTouchStart] = React.useState(0);
    const [timeStart, setTimeStart] = React.useState(0);
    const [touchMove, setTouchMove] = React.useState(0);
    const [timeEnd, setTimeEnd] = React.useState(0);
    const touchEndDebounce = useDebounce(touchMove - touchStart, 200);
    const timeEndDebounce = useDebounce(timeEnd - timeStart, 200);
    const handleOnStart = (event: TouchEvent) => {
        if (event?.touches[0]?.clientY) {
            setTimeStart(new Date().getTime());
            setTouchStart(event?.touches[0]?.clientY);
        }
    };
    const handleOnEnd = (event: TouchEvent) => {
        if (event?.touches[0]?.clientY) {
            setTimeEnd(new Date().getTime());
            setTouchMove(event?.touches[0]?.clientY);
        }
    };

    React.useEffect(() => {
        window.addEventListener('touchstart', handleOnStart, false);
        window.addEventListener('touchmove', handleOnEnd, false);

        return () => {
            window.removeEventListener('touchmove', handleOnEnd, false);
            window.removeEventListener('touchstart', handleOnStart, false);
        };
    }, []);

    return touchEndDebounce / timeEndDebounce;
}
