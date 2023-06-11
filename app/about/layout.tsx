import { ReactNode } from 'react';

const AboutLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <nav>About nav</nav>
            <main>{children}</main>
        </>
    );
};
export default AboutLayout;
