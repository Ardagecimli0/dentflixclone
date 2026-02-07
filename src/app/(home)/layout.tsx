import "@/app/globals.css";
import { ClientBody } from "@/app/ClientBody";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ClientBody lang="en">
                {children}
            </ClientBody>
        </html>
    );
}
