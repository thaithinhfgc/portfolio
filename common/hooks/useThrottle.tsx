import * as React from 'react';

export const useThrottle = (callback: Function, delay: number) => {
    const [lastModify, setLastModify] = React.useState(0);
    return (...args: any[]) => {
        const now = new Date().getTime();
        if (now - lastModify < delay) {
            return;
        }

        setLastModify(now);
        return callback(...args);
    };
};
