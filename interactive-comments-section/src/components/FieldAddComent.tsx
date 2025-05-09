import { useState } from "react";
import { useLoginContext } from "../contexts/UserContext";
import { useCommentMutation } from "../hooks/useCommentMutation";

interface FieldAddComentProps {
    className?: string;

}

export default function FieldAddComent({ className }: FieldAddComentProps) {


    const { user } = useLoginContext();
    const commentMutation = useCommentMutation();
    const [text, setText] = useState<string>("");

    function handleChangeText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
    }


    function handleSubmitComment() {
        commentMutation.mutate({
            content: text,
            userId: user?.id ?? 0,
        });
        setText("");
    }


    return (
        <main className={`bg-White py-3 px-3 rounded-[10px] ${className} `}>
            <textarea value={text} onChange={handleChangeText} className="cursor-pointer  focus:ring-1 focus:ring-Purple-600 hover:bg-Purple-700 transition duration-200 ease-in-out     w-full h-24 pl-4 pt-2 border-1 border-gray-300 rounded-[7px] font-regular focus:outline-none" name="" id="" placeholder="Add a comment..."></textarea>

            <div className="flex justify-between items-center mt-3">
                <img className="h-9 w-9 rounded-full bg-cover" src={user?.avatarUrl} alt="" />
                <button
                    aria-label="Reply"
                    onClick={handleSubmitComment}

                    className="cursor-pointer uppercase bg-Purple-600 text-White py-2 px-6 rounded-[8px]">Send</button>
            </div>

        </main>
    )
}