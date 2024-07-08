import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
    data: string
}

const Badge: React.FC<BadgeProps> = ({ data }) => {
    return (
        <b className={styles.badge}>
            {data}
        </b>
    );
};

export default Badge;
