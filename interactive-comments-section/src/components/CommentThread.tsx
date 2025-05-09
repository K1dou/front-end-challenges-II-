import { useLoginContext } from "../contexts/UserContext";
import { useLikeMutation } from "../hooks/useLikeMutation";
import { useUnlikeMutation } from "../hooks/useUnlikeMutation";
import CardComment from "./CardComment";

interface CommentThreadProps {
    comment: any;
    level?: number;
}

export default function CommentThread({ comment, level = 0 }: CommentThreadProps) {
    const likeComment = useLikeMutation();
    const unlikeComent = useUnlikeMutation();
    const { user } = useLoginContext();

    const flattenedReplies =
        level === 0
            ? [
                ...(comment.replies || []),
                ...comment.replies?.flatMap((r: any) => r.replies || []) || [],
            ]
            : [];

    return (
        <div className={`pt-6  ${level > 0 ? 'pl-6 ml-4 border-l-2 border-gray-200' : ''}`}>
            <CardComment
                createdAt={comment.createdAt}
                id={comment.id}
                idAuthor={comment.author.id}
                name={comment.author.nome}
                content={comment.content}
                like={comment.likeCount || 0}
                src={comment.author.avatarUrl}
                onClickLike={() =>
                    user?.id && likeComment.mutate({ commentId: comment.id, userId: user.id })
                }
                onClickUnlike={() =>
                    user?.id && unlikeComent.mutate({ commentId: comment.id, userId: user.id })
                }
            />

            {flattenedReplies.length > 0 && (
                <div className="flex flex-col gap-4 mt-2">
                    {flattenedReplies.map((reply: any) => (
                        <CommentThread key={reply.id} comment={reply} level={1} />
                    ))}
                </div>
            )}
        </div>
    );
}
