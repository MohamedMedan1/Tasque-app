"use client"
import { useFormStatus } from "react-dom"
import Button from "./Button";
import MiniSpinner from "./MiniSpinner";

export default function SubmitButton({children,additionalStyles}) {
    const { pending } = useFormStatus();
    return <Button additionalStyles={additionalStyles} disabled={pending}>{pending?<MiniSpinner/>:children}</Button>
}