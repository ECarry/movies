const Container = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full px-16">
      {children}
    </div>
  )
}

export default Container
