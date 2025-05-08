import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface ModalDeleteProps {
    onDelete: () => void;
}

export default function ModalDelete({ onDelete }: ModalDeleteProps) {

    return (
        <>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="text-Pink-400 font-bold text-[16px]"><img className="h-3 w-3" src="icon-delete.svg" alt="" /> Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-start">Delete comment</AlertDialogTitle>
                        <AlertDialogDescription className="text-start">
                            Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex flex-row items-center justify-center">
                        <AlertDialogCancel className="uppercase text-White bg-Grey-500 py-6 w-[150px]">NO, Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete} className="uppercase text-White bg-Pink-400 py-6 w-[150px]">Yes, Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}