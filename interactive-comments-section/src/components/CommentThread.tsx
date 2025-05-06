import { useLikeMutation } from "../hooks/useLikeMutation";
import CardComment from "./CardComment";

interface CommentThreadProps {
    comment: any;
    level?: number;
}

export default function CommentThread({ comment, level = 0 }: CommentThreadProps) {

    const likeComment = useLikeMutation();


    return (
        <div className={`mt-4 ${level > 0 ? 'pl-6 ml-4 border-l-2 border-gray-200' : ''}`}>
            <CardComment
                createdAt={comment.createdAt}
                id={comment.id}
                name={comment.author.username}
                content={comment.content}
                like={comment.likeCount || 0}
                src={comment.author.avatarUrl}
                onClick={() => likeComment.mutate(comment.id)}
            />

            {comment.replies?.length > 0 && (
                <div className="flex flex-col gap-4 mt-2">
                    {comment.replies.map((reply: any) => (
                        <CommentThread key={reply.id} comment={reply} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}
