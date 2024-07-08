"use client";

import React, { useState, useEffect } from "react";
import { getComments } from "~/app/api/comments";
import type { CommentData } from "~/types/comments";
import CommentBox from "./CommentBox";
import CommentItem from "./CommentItem";
import { UserData } from "~/types/users";

interface CommentListProps {
  initialComments: CommentData[];
  postId: number;
  user: UserData;
}

const CommentList: React.FC<CommentListProps> = ({
  initialComments,
  postId,
  user,
}) => {
  const [comments, setComments] = useState<CommentData[]>(initialComments);
  const [loading, setLoading] = useState(false);

  const fetchAndSetComments = async (parent = undefined) => {
    setLoading(true);
    try {
      const updatedComments: CommentData[] = await getComments(postId);
      setComments(updatedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }

    if (parent) {
      // 대댓글 처리
      //   setComments((prevComments) =>
      // prevComments.map((comment) =>
      //   comment.id === parentId
      //     ? { ...comment, replies: [...comment.replies, newComment] }
      //     : comment,
      // ),
      //   )
    } else {
      // 일반 댓글 처리
      //   setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  useEffect(() => {
    fetchAndSetComments(undefined);
  }, [postId]);

  return (
    <>
      <h2>
        <strong>댓글</strong>
      </h2>
      <CommentBox
        postId={postId}
        user={user}
        parent={undefined}
        onCommentAdded={fetchAndSetComments}
      />
      <small>Sort by: </small>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="my-10">
          {comments.map((comment) => (
            <li key={comment.id} className="my-5">
              <CommentItem comment={comment} user={user} onAddReply={fetchAndSetComments} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CommentList;
