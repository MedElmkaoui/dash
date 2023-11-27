
export type RowFormProps = {
    children : any
    modal: boolean
}

function RowForm({children, modal}: RowFormProps) {
  return (
    <div className={`mb-4.5 flex  flex-col gap-6  ${!modal && 'xl:flex-row'} xl:items-end`}> 
        {children}
    </div>
  )
}

export default RowForm