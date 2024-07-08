'use client';

import React, { useState } from 'react';
import { createComment } from '~/app/api/comments';
import styles from './Comment.module.css';
import { type UserData } from '~/types/users';

interface CommentBoxProps {
    postId: number;
    user: UserData;
    parent: number | undefined;
    onCommentAdded: (parent: number | undefined) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId, user, parent, onCommentAdded }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        if (content.trim() === '') {
            alert('댓글 내용을 입력해주세요.');
            return;
        }

        try {
            await createComment({ post: postId, created_by: user.id, content, parent });
            setContent('');
            onCommentAdded(parent);
        } catch (error) {
            console.error('Error creating comment:', error);
            alert('댓글 작성 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className={styles.commentContainer}>
            <b className={styles.author}>{user.username}</b>
            <textarea
                id="comment"
                className={styles.commentTextarea}
                placeholder="댓글을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.buttonContainer}>
                <button type="button" className={styles.commentButton} onClick={handleSubmit}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default CommentBox;
