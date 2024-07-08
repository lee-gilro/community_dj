// components/Profile.tsx

import Image from 'next/image';
import styles from './Profile.module.css';

interface ProfileProps {
    src: string;
    alt: string;
    size?: number;
}

const Profile: React.FC<ProfileProps> = ({ src, alt, size = 100 }) => {
    return (
        <p className={styles.profileCircle} style={{ width: size, height: size }}>
            <Image src={src} alt={alt} layout="fill" className={styles.profileImage} />
        </p>
    );
};

export default Profile;
