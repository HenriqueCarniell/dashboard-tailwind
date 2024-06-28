import { LogOut } from "lucide-react";

function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img src="https://github.com/diego3g.png" alt="" className="h-10 w-10 rounded-full" />

            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Diego Fernandes
                </span>
                <span className="truncate text-sm text-zinc-500">
                    diasdasdasdasego@rocketseat.com.br
                </span>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    );
}

export default Profile;