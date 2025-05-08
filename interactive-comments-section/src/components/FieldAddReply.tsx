import { useState } from "react";
import { useLoginContext } from "../contexts/UserContext";
import { useReplyMutation } from "../hooks/useReply";

interface FieldAddComentProps {
    className?: string;
    parentId: number;
    onClick: () => void;
    parentAuthorName: string

}

export default function FieldAddReply({ className, parentId, onClick, parentAuthorName }: FieldAddComentProps) {



    const { user } = useLoginContext();
    const [text, setText] = useState<string>(`@${parentAuthorName}`);
    const replyComment = useReplyMutation();


    function handleChangeText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
    }


    function handleSubmitReply() {
        replyComment.mutate({
            content: text,
            userId: user?.id ?? 0,
            parentId: parentId
        });
        setText("");
    }



    return (
        <main className={`bg-White py-3 px-3 rounded-[10px] ${className}`}>
            <textarea
                value={text}
                onChange={handleChangeText}
                className="w-full h-24 pl-4 pt-2 border-1 border-gray-300 rounded-[7px] font-regular focus:outline-none"
                placeholder="Add a comment..."
            ></textarea>

            <div className="flex justify-between items-center mt-3">
                <img
                    className="h-9 w-9 rounded-full bg-cover"
                    src={user?.avatarUrl}
                    alt=""
                />
                <button
                    onClick={() => {
                        onClick();
                        handleSubmitReply();
                    }}
                    className="uppercase bg-Purple-600 text-White py-2 px-6 rounded-[8px]"
                >
                    Reply
                </button>
            </div>
        </main>
    )
}