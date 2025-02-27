'use client'

import React from "react"
import { Provider } from "react-redux"
import { Store } from "@/components/lib/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "@/components/lib/store"

export default function StoreProvider({
    children,
}: { children: React.ReactNode }) {
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
