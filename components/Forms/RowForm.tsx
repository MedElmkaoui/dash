
export type RowFormProps = {
    children : any
}

function RowForm({children}: RowFormProps) {
  return (
    <div className="mb-4.5 flex justify-center  flex-col gap-6 xl:flex-row xl:items-end"> 
        {children}
    </div>
  )
}

export default RowForm