type  ButtonProps = {
    variant  : 'primary' | 'secondary'
    children : string
}  & Omit<React.ComponentProps<'button'>, 'children'>



export default function CustomButton({variant , children , ...rest} : ButtonProps){
    return(
        <div>
            <button className={`class-with-${variant}`} {...rest}>{children}</button>
        </div>
    )
}