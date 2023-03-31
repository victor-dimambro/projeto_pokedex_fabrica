import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="flex items-center justify-center w-screen h-screen mx-auto animate-spin">
            <CircleNotch className="w-8 h-8"
            
            />
        </div>
    )
}