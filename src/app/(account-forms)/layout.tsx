import "../globals.css";

export const metadata = {
  title: 'Sign In',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={"font-nunito font-medium"}
        style={{
          backgroundImage: "url(/account-forms/background.png)",
          backgroundSize: "cover"
        }}>
        {children}
      </body>
    </html>
  )
}
