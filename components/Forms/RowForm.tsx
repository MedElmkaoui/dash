
export type RowFormProps = {
    children : any
}

function RowForm({children}: RowFormProps) {
  return (
    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row"> 
        {children}
    </div>
  )
}

export default RowForm