import { io, Socket } from "socket.io-client";
import { create } from "zustand";


interface StocketState {
    socket : null | Socket,
    connect : (token : string) => void
    disconnect: () => void;
}

export const useSocketStore = create<StocketState>((set , get) => ({
    socket : null ,

    connect : (token : string) => {
        const existingSocket = get().socket;

        if(existingSocket) return;

        const socket = io(import.meta.env.VITE_BASE_URL , {
            auth : {
                token
            }
        })

        set({socket})
    },

    disconnect : () => {
        const socket = get().socket;

        if(socket){
            socket.disconnect();
            set({socket : null});
        }
    }

}))