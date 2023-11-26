import type { ReactElement } from "react"
import { RootLayout } from "@/components/layout"
import { ProfileBlock } from "@/components/block"
function User() {
    return (
        <>
            <ProfileBlock />
        </>
    )
}

User.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout activeIndex={1}>
            {page}
        </RootLayout>
    )
}

export default User