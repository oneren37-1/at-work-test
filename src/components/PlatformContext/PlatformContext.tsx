import React, {createContext, useEffect, useState} from 'react'

export type Platform = 'mobile' | 'pad' | 'desktop';

export const PlatformContext = createContext<Platform>('desktop');

export interface PlatformProviderProps {
    children: React.ReactNode;
}

const PlatformProvider = ({ children }: PlatformProviderProps) => {
    const [platform, setPlatform] = useState<Platform>(window.innerWidth < 768 ? 'mobile' : 'desktop');

    useEffect(() => {
        const checkWidth = () => {
            const newPlatform = window.innerWidth < 768 ? 'mobile' : (
                window.innerWidth < 1300 ? 'pad' : 'desktop'
            );
            if (newPlatform !== platform) {
                setPlatform(newPlatform);
            }
        };

        checkWidth();

        window.addEventListener('resize', checkWidth);

        return () => window.removeEventListener('resize', checkWidth);
    }, [platform]);

    return (
        <PlatformContext.Provider value={platform}>
            {children}
        </PlatformContext.Provider>
    );
};

export default PlatformProvider