import { useState } from "react";
import { useLoginContext } from "../contexts/UserContext";
import { useDeleteComment } from "../hooks/useDeleteComment";
import { useUpdateComment } from "../hooks/useUpdateComment";
import { formatRelativeDate } from "../utils/date";
import FieldAddReply from "./FieldAddReply";
import ModalDelete from "./ModalDelete";

interface CardCommentProps {
    id: number;
    name: string;
    content: string;
    like: number;
    src: string;
    onClickLike?: () => void;
    onClickUnlike?: () => void;
    createdAt: string;
    idAuthor: number
}

export default function CardComment({ name, content, like, src, id, idAuthor, onClickLike, onClickUnlike, createdAt }: CardCommentProps) {


    const [reply, setReply] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content);



    const { user } = useLoginContext();
    const deleteComment = useDeleteComment();
    const updateComment = useUpdateComment();



    function handleDeleteComment() {
        if (user?.id) {
            deleteComment.mutate({ idComment: id });
        }
    }


    function handleReply() {
        setReply(!reply)

    }

    function handleUpdateComment() {
        if (editedContent.trim() && editedContent !== content) {
            updateComment.mutate({ idComment: id, content: editedContent });
            setIsEditing(false);
        }
    }


    function renderContentWithMention(content: string) {
        return content.split(/(@\w+)/g).map((part, index) => {
            if (part.startsWith('@')) {
                return (
                    <span key={index} className="text-Purple-600 font-semibold">
                        {part}
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    }




    return (
        <>
            <main className="py-3 bg-White px-3 rounded-[10px]">
                <div className="flex items-center  gap-3">
                    <img className="h-9 w-9 rounded-full" src={src} alt="" />
                    <p className="font-semibold">{name}</p>
                    {user?.id === idAuthor && <span className="bg-[#5758AB] text-White rounded-2xl px-2 py-1 text-[10px]">You</span>}
                    <p className="text-gray-500 font-normal text-[12px]">{formatRelativeDate(createdAt)}</p>
                </div>
                <div className="mt-3">
                    {isEditing ? (
                        <textarea
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                        />
                    ) : (
                        <p className="text-gray-500 font-regular">{renderContentWithMention(content)}</p>
                    )}
                </div>

                <div className="flex justify-between mt-4 gap-2 ">
                    <div className="bg-[#F5F6FA] gap-3 flex items-center rounded-[10px] py-2 px-2">
                        <button
                            onClick={onClickLike}
                            className="p-1 rounded-full hover:bg-gray-200 "
                        >
                            <img src="/icon-plus.svg" alt="" />
                        </button>
                        <span className="font-bold text-[#5758AB]">{like}</span>

                        <button
                            onClick={onClickUnlike}
                            className="p-1 rounded-full hover:bg-gray-200 text-gray-500">
                            <img src="/icon-minus.svg" alt="" />
                        </button>
                    </div>

                    {user?.id === idAuthor ? (
                        <div className="flex gap-4 items-center">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleUpdateComment}
                                        className="flex text-white bg-[#5758AB] px-3 py-1 rounded-md font-bold"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditing(false);
                                            setEditedContent(content);
                                        }}
                                        className="text-gray-500 text-sm"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>

                                    <ModalDelete onDelete={handleDeleteComment} />
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="flex text-[#5758AB] items-center gap-1 font-bold"
                                    >
                                        <img className="h-3 w-3" src="icon-edit.svg" alt="" /> Edit
                                    </button>
                                </>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={handleReply}
                            className="flex gap-2 items-center text-[#5758AB] font-bold"
                        >
                            <img className="h-4 w-4" src="/icon-reply.svg" alt="" />
                            Reply
                        </button>
                    )}
                </div>



            </main>

            <div>
                {reply && (
                    <div className="mt-3">
                        <FieldAddReply parentAuthorName={name} onClick={handleReply} parentId={id} />
                    </div>
                )}

            </div>
        </>
    )
}